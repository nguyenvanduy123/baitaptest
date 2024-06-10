<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Menu;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menu = [
            [
                'name' => ' ',
                'icon' => '/image/menu1.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],

            [
                'name' => ' ',
                'icon' => '/image/menu2.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu3.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu4.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu5.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu6.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu7.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu8.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu9.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu10.png',
                'link' =>'/tasks',
                'created_at' => \now(),

            ],
            [
                'name' => ' ',
                'icon' => '/image/menu11.png',
                'link' =>'/menu1',
                'created_at' => \now(),

            ],

        ];
        foreach ($menu as $menuData) {
            Menu::create($menuData);
        }
    }
}
