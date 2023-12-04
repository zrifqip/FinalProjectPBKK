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
        $totalPrice = $request->query('totalPrice');
        $totalTickets = $request->query('totalTickets');
        $eventDetails = [
            "id" => $event->id,
            "nama" => $event->nama,
            "harga" => $event->harga,
        ];
        return Inertia::render('Events/transaksiconfirmation', [
            'event' => $eventDetails,
            'totalPrice' => $totalPrice,
            'totalTickets' => $totalTickets,
        ]);
    }
    public function confirmPayment(Request $request)
    {
            $validatedData = $request->validate([
            'totalTickets' => 'required',
            'totalPrice' => 'required',
            'bukti_pembayaran' => 'required'

        ]);
        info('Controller action accessed: YourController@yourControllerAction');
        $paymentDate = now();
        if ($request->hasFile('bukti_pembayaran')) {
            $filename = $request->bukti_pembayaran->store('payments');
            $validatedData['bukti_pembayaran'] = $filename;
        }

        // Create a new transaction record
        $transaksi = new Transaksi([
            'user_id' => $request->user()->id, // Automatically get the user's ID
            'event_id' => $validatedData['event_id'], // Get event ID from the request
            'bukti_pembayaran' => $validatedData['bukti_pembayaran'],
            'status_pembayaran' => 'waiting confirmation',
            'payment_date' => [$paymentDate], // Set the payment date to the current time
            'total_tiket' => $validatedData['totalTickets'],
            'harga_total' => $validatedData['totalPrice'],
        ]);

        $transaksi->save();


        // After storing data, you can redirect or return a response
        return route("Home");

    }
}
