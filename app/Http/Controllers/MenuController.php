<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Menu;
class MenuController extends Controller
{
    public function LoadMenu(Request $request)
    {
        $Menu = Menu::all();

        return $Menu;
    }
}
