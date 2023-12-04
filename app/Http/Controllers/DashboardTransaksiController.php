<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Transaksi;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            ];
        });

        return Inertia::render($route, ['data' => $data]);
    }
    
    function update(Request $request) { 
        Transaksi::find($request->id)->update(['status_pembayaran' => $request->status_pembayaran]);
    }
}
