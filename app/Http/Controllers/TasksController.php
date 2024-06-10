<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use DB;
use App\Models\Task;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;

class TasksController extends Controller
{
    public function loadTask(Request $request): Response
    {

        $status = DB::table('statuses')->get();
        $users = DB::table('users')->get();
        return Inertia::render('Tasks/Tasks', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'statuscontac' => $status,
            'users' => $users
        ]);
    }
    public function loadTableTask(Request $request)
    {
        $searchTerm = $request->input('searchTerm');

        $page = $request->input('page');
        $perPage = $request->input('perPage');
        $Valuedrop = $request->input('Valuedrop');
        $valuedropuser = $request->input('valuedropuser');
        // dd($Valuedrop);

        $TableTasks = DB::table('tasks')
            ->leftJoin('users', 'users.id', '=', 'tasks.iduser')
            ->leftJoin('statuses', 'statuses.id', '=', 'tasks.status')
            ->select('tasks.*', 'users.name as iduser', 'statuses.id as idstatus', 'statuses.name as statusname')
            ->where(function ($query) use ($searchTerm, $Valuedrop,$valuedropuser) {
                $query->where(function ($query) use ($searchTerm) {
                        $query->where('tasks.title', 'like', "%$searchTerm%")
                            ->orWhere('tasks.created', 'like', "%$searchTerm%");
                    })
                    ->where(function ($query) use ($Valuedrop) {
                        if (!empty($Valuedrop)) {
                            $query->where('tasks.status', 'like', "%$Valuedrop%");
                        }
                    })
                    ->where(function ($query) use ($valuedropuser) {
                        if (!empty($valuedropuser)) {
                            $query->where('tasks.iduser', 'like', "%$valuedropuser%");
                        }
                    });
            })
            ->paginate($perPage, ['*'], 'page', $page);

        return response()->json($TableTasks);
    }

    public function statusChage(Request $request)
    {
        if ($request) {
            $dataUpdate = [
                'status' => $request->idstatus
            ];
            $updatestus = DB::table('tasks')->where('id', $request->status)->update($dataUpdate);
        }
        return response()->json($updatestus);
    }
    public function deleteTasksChage(Request $request)
    {
        $searchTerm = $request->input('items');
        return response()->json($searchTerm);
    }


}
