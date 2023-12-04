<?php

namespace App\Console\Commands;

use App\Models\Event;
use Illuminate\Console\Command;

class UpdateEventStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update-event-status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $now = now();
        Event::where('tanggal_tutup_pendaftaran', '<', $now)
            ->where('event_status', '=', 'belum dimulai')
            ->update(['event_status' => 'tutup pendaftaran']);

        Event::where('tanggal', '<', $now)
            ->update(['event_status' => 'sudah selesai']);
    }
}
