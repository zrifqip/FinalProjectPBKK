<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class EventsController extends Controller
{
    public function index(): Response {
        $data = Event::all();

        $events = [];

        foreach ($data as $d) {
            $penyelenggara = Event::join('users', 'events.user_id', '=', 'users.id')->where('users.id', $d->user_id)->value('users.nama');
            
            array_push($events, [
                "id" => $d->id,
                "nama" => $d->nama,
                "deskripsi" => $d->deskripsi,
                "tanggal" => date_format(date_create($d->tanggal), 'd F Y'),
                "waktu" => date_format(date_create($d->tanggal), 'H:i'),
                "penyelenggara" => $penyelenggara,
                "alamat" => $d->alamat,
                "jumlah_tiket" => $d->jumlah_tiket,
                "harga" => $d->harga
            ]);
        }

        return Inertia::render('Event', [
            'events' => $events,
        ]);
    }
    
    public function store(Request $request): RedirectResponse
    {
        Event::create([
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'tanggal' => $request->tanggal,
            'alamat' => $request->alamat,
            'jumlah_tiket' => $request->jumlah_tiket,
            'harga' => $request->harga,
            'tanggal_tutup_pendaftaran' => $request->tanggal_tutup_pendaftaran,
            'tipe_event_id' => 1,
            'user_id' => $request->user()->id
        ]);

        return redirect("/");
    }
}
