<?php

namespace Database\Seeders;

use App\Models\TipeEvent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TipeEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TipeEvent::factory()->count(5)->create();
    }
}
