<?php

namespace App\Http\Controllers;

use App\Jobs\GenerateTicket;
use App\Models\Event;
use App\Models\Tiket;
use App\Models\Transaksi;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Storage;

class DashboardTransaksiController extends Controller
{

    function index() {
        $user = auth()->user();

        $query = null;
        $route = null;

        if ($user->role == 'user') {
            $query = 'user_id';
            $route = 'Dashboard/User/MyTransaksi';
        } elseif ($user->role == 'admin') {
            $query = 'admin_id';
            $route = 'Dashboard/Admin/ManageTransaksi';
        }

        $data = Transaksi::where($query, $user->id)->get()->map(function ($transaksi) {
            return [
                'id' => $transaksi->id,
                'user' => [
                    'id' => $transaksi->user_id,
                    'nama' => User::find($transaksi->user_id)->value('nama'),
                ],
                'event' => [
                    'id' => $transaksi->event_id,
                    'nama' => Event::find($transaksi->event_id)->value('nama'),
                ],
                'total_tiket' => $transaksi->total_tiket,
                'harga_total' => $transaksi->harga_total,
                'bukti_pembayaran' => $transaksi->bukti_pembayaran,
                'status_pembayaran' => $transaksi->status_pembayaran,
                'tikets' => $transaksi->tikets
            ];
        });

        return Inertia::render($route, ['data' => $data]);
    }

    function update(Request $request) {
        $transaksi = Transaksi::find($request->id);
        $transaksi->update(['status_pembayaran' => $request->status_pembayaran]);

        if ($transaksi->status_pembayaran == 'Terima') {
            $this->handleTicketsForTransaksi($transaksi);
        }
    }

    private function handleTicketsForTransaksi($transaksi) {
        $initialTicketId = Tiket::count() + 1;
        $numberOfTicketsToCreate = $transaksi->total_tiket;

        for ($i = 0; $i < $numberOfTicketsToCreate; $i++) {
            // Increment the ticket ID for each new ticket
            $ticketId = $initialTicketId + $i;

            // Generate QR Code for each ticket
            $qrCode = QrCode::size(250)->generate('TicketID: ' . $ticketId);

            // Save QR Code image
            $qrCodePath = '/ticket/' . $ticketId . '.svg';
            Storage::disk('public')->put($qrCodePath, $qrCode);

            // Create the tiket record
            Tiket::create([
                'transaksi_id' => $transaksi->id,
                'kode' => $qrCodePath,
                // other fields for tiket
            ]);
        }
    }
}
