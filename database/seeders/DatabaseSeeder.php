<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $users = [
            [
                'name' => 'Nguyen Van Duy',
                'email' => 'nguyenvanduybin123@gmail.com',
                'email_verified_at' => \now(),
                'password' => \Hash::make('123456789'),
                'remember_token' => Str::random(10),
            ],

            [
                'name' => 'usertest1',
                'email' => 'usertest1@gmail.com',
                'email_verified_at' => \now(),
                'password' => \Hash::make('123456789'),
                'remember_token' => Str::random(10),
            ],

        ];
        foreach ($users as $userData) {
            User::create($userData);
        }
    }
}
