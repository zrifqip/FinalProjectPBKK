<?php

namespace Database\Factories;

use App\Models\TipeEvent;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userId = User::all('id')->random();
        $tipeEventId = TipeEvent::all('id')->random();

        return [
            'nama' => fake()->word(2),
            'deskripsi' => fake()->paragraph(4),
            'tanggal' => fake()->dateTimeBetween('now', '+4 month'),
            'alamat' => fake()->address(),
            'jumlah_tiket' => fake()->randomNumber(),
            'harga' => fake()->numberBetween("10000", "40000"),
            'tanggal_tutup_pendaftaran' => fake()->dateTimeBetween('now', '+1 month'),
            'user_id' => $userId,
            'tipe_event_id' => $tipeEventId,
        ];
    }
}
