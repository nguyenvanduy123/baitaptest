<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Status;
class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $status = [
            [
                'name' => 'Appel',

            ],

            [
                'name' => "unheard",

            ],
            [
                'name' => "busy",

            ],

        ];
        foreach ($status as $statusData) {
            Status::create($statusData);
        }
    }
}
