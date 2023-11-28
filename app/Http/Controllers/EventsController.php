<?php

namespace App\Http\Controllers;

use App\Models\Event;
use DateTime;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Inertia\Inertia;

class EventsController extends Controller
{
    public function index() {

        $events = Event::with(['user', 'tipeEvent'])->get()->map(function ($event) {
            $penyelenggara = Event::join('users', 'events.user_id', '=', 'users.id')->where('users.id', $event->user_id)->value('users.nama');
            return [
                "id" => $event->id,
                "nama" => $event->nama,
                "deskripsi" => $event->deskripsi,
                "tanggal" => date_format(date_create($event->tanggal), 'd F Y'),
                "waktu" => date_format(date_create($event->tanggal), 'H:i'),
                "penyelenggara" => $penyelenggara,
                "alamat" => $event->alamat,
                "jumlah_tiket" => $event->jumlah_tiket,
                "harga" => $event->harga
            ];
        });

        return Inertia::render('Event', [
            'events' => $events
        ]);
    }
    public function show($id) {
        $event = Event::with(['user', 'tipeEvent'])->findOrFail($id);
        $eventDetails = [
            "id" => $event->id,
            "name" => $event->nama,
            "date" => (new DateTime($event->tanggal))->format('dS-F-Y'),
            "time" => (new DateTime($event->tanggal))->format('H:i'),
            "place" => $event->alamat,
            "ticket_count" => $event->jumlah_tiket,
            "price" => $event->harga,
            "description" => $event->deskripsi,
            "close_date" => (new DateTime($event->tanggal_tutup_pendaftaran))->format('dS-F-Y H:i'),
            "user_name" => $event->user->nama,
            "event_type" => $event->tipeEvent->nama,

        ];
        return Inertia::render('Events/Detail', [
            'event' => $eventDetails
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


