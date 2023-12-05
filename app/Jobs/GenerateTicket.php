<?php

namespace App\Jobs;

use App\Models\Transaksi;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Storage;

class GenerateTicket implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $transaksi;

    public function __construct(Transaksi $transaksi)
    {
        $this->transaksi = $transaksi;
    }

    public function handle()
    {
        // Generate QR code
        foreach ($this->transaksi->tikets as $tiket) {
            // Generate the full URL for each tiket
            $url = url('tiket/' . $tiket->id . '/claim');
            $qrCode = QrCode::format('png')->size(400)->generate($url);
            $filePath = 'tickets/' . $tiket->id . '.png';
            Storage::disk('public')->put($filePath, $qrCode);
            $tiket->update(['ticket_path' => $filePath]);
        }
    }
}
