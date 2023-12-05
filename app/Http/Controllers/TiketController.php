<?php

namespace App\Http\Controllers;

use App\Models\Tiket;
use Illuminate\Http\Request;

class TiketController extends Controller
{
    public function claim($tiket_id)
    {
        $tiket = Tiket::findOrFail($tiket_id);
        $tiket->update(['isClaimed' => true]);

    }
    public function getTicketsByTransaksiId($transaksiId)
    {
        $tickets = Tiket::where('transaksi_id', $transaksiId)->get();
        return response()->json($tickets);
    }
}
