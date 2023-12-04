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
        $user = User::all();
        $userId = $user->where('role', 'user')->random(1)->value('id');
        $adminId = $user->where('role', 'admin')->random(1)->value('id');
        $tipeEventId = TipeEvent::all('id')->random();

        return [
            'nama' => fake()->sentence(),
            'deskripsi' => fake()->paragraph(4),
            'tanggal' => fake()->dateTimeBetween('now', '+4 month'),
            'alamat' => fake()->address(),
            'jumlah_tiket' => fake()->randomNumber(),
            'harga' => fake()->numberBetween("10000", "40000"),
            'tanggal_buka_pendaftaran' => fake()->dateTimeBetween('now', '+3 day'),
            'tanggal_tutup_pendaftaran' => fake()->dateTimeBetween('+3 day', '+1 month'),
            'banner' => 'event-pic.png',
            'user_id' => $userId,
            'admin_id' => $adminId,
            'tipe_event_id' => $tipeEventId,
        ];
    }
}
