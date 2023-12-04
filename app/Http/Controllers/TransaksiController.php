<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class TransaksiController extends Controller
{
    public function show(Request $request, $id) {
        $event = Event::with(['user'])->findOrFail($id);
        $props = [
            "event" => [
                "id" => $event->id,
                "nama" => $event->nama,
                "harga" => $event->harga,
            ],
            "jumlah_tiket" => (int) $request->jumlah_tiket
        ];

        return Inertia::render('Events/Purchase', [
            "props" => $props
        ]);
    }
    public function confirm(Request $request)
    {

        $request->validate([
            'total_tiket' => 'required',
            'bukti_pembayaran' => 'required|file'
        ]);


        $request->bukti_pembayaran->storeAs('public/images', $request->bukti_pembayaran->getClientOriginalName());

        // if ($request->hasFile('bukti_pembayaran')) {
        //     $filename = $request->bukti_pembayaran->store('payments');
        //     $validatedData['bukti_pembayaran'] = $filename;
        // }

        $eventData = Event::select('harga', 'admin_id')->find($request->id);

        // Create a new transaction record
        Transaksi::create([
            'bukti_pembayaran' => $request->bukti_pembayaran->getClientOriginalName(),
            'status_pembayaran' => 'waiting confirmation',
            'total_tiket' => $request->total_tiket,
            'harga_total' => $eventData->harga * $request->total_tiket,
            'user_id' => $request->user()->id, // Automatically get the user's ID
            'event_id' => $request->id, // Get event ID from the request
            'admin_id' => $eventData->admin_id,
        ]);

    }
}
