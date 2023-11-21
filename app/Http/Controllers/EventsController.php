<?php

namespace App\Http\Controllers;

use App\Models\Event;
use DateTime;
use Illuminate\View\View;
use Inertia\Inertia;

class EventsController extends Controller
{
    public function index() {
        $events = Event::with(['user', 'tipeEvent'])->get()->map(function ($event) {
            return [
                "id" => $event->id,
                "name" => $event->nama,
                "date" => (new DateTime($event->tanggal))->format('dS-F-Y'),
                "time" => (new DateTime($event->tanggal))->format('H:i'),
                "place" => $event->alamat,
                "ticket_count" => $event->jumlah_tiket,
                "price" => $event->harga,
                "close_date" => (new DateTime($event->tanggal_tutup_pendaftaran))->format('dS-F-Y H:i'),
                "user_name" => $event->user->nama,
                "event_type" => $event->tipeEvent->nama,
            ];
        });

        return Inertia::render('Dashboard', [
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
}

