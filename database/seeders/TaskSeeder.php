<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for ($i = 1; $i < 300; $i++) {
            $data[] = [
                'accomplished' => 1,
                'title' => 'Titre tâche ' . $i,
                "duedate" => "2023-06-29 15:10:50",
                'email' => 'romain@gillig.studio',
                'opportunity' => '06 88 65 26 87',
                'status' => 1,
                'contact' => 'Romain Gillig',
                'created' => '2023-06-29 15:10:50',
                'iduser' => 1,
            ];
        }

        // DB::table('tasks')->insert($data);
        foreach ($data as $dataData) {
            Task::create($dataData);
        }
    }
}
