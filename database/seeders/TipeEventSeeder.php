<?php

namespace Database\Seeders;

use App\Models\TipeEvent;
use Illuminate\Database\Seeder;

class TipeEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tipe_eventJson = file_get_contents(storage_path("../database/tipe_event.json"));
        $tipe_event = json_decode($tipe_eventJson, true);

        foreach ($tipe_event as $event) {
            TipeEvent::updateOrCreate([
               "id" => $event["id"],
               "nama" => $event["nama"]
            ]);
        }
    }
}
