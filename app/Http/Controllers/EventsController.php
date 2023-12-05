<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\TipeEvent;
use App\Models\User;
use DateTime;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EventsController extends Controller
{
    public function index(Request $request) {
        $filter = $request->query('filter');
        
        $events = Event::with(['user', 'tipeEvent'])->where('event_status', 'belum dimulai')->get()->map(function ($event) {
            return [
                "id" => $event->id,
                "nama" => $event->nama,
                "deskripsi" => $event->deskripsi,
                "tanggal" => date_format(date_create($event->tanggal), 'd F Y'),
                "waktu" => date_format(date_create($event->tanggal), 'H:i'),
                "penyelenggara" => $event->user->nama,
                "alamat" => $event->alamat,
                "jumlah_tiket" => $event->jumlah_tiket,
                "harga" => (string) $event->harga,
                "banner" => $event->banner,
                "tipe_event_id" => $event->tipe_event_id,
            ];
        });
        
        if ($filter != null) {
            $events = $events->where('tipe_event_id', $filter);
        }

        
        $filteredEvents = [];
        foreach ($events as $event) {
            $filteredEvents[] = $event;
        }

        $tipe_event = TipeEvent::all();

        return Inertia::render('Event', [
            'events' => $filteredEvents,
            'tipe_event' => $tipe_event,
            'filter' => $filter,
        ]);
    }

    public function new() {
        $tipe_event = TipeEvent::all();

        return Inertia::render('Events/Create', ["tipe_event" => $tipe_event]);
    }
    public function show($id) {
        $event = Event::with(['user', 'tipeEvent'])->findOrFail($id);

        $eventDetails = [
            "id" => $event->id,
            "deskripsi" => $event->deskripsi,
            "nama" => $event->nama,
            "tanggal" => (new DateTime($event->tanggal))->format('d F Y'),
            "waktu" => (new DateTime($event->tanggal))->format('H:i'),
            "alamat" => $event->alamat,
            "jumlah_tiket" => $event->jumlah_tiket,
            "harga" => $event->harga,
            "banner" => $event->banner,
            "tanggal_buka_pendaftaran" => date_format(date_create($event->tanggal_buka_pendaftaran), 'd F Y H:i'),
            "tanggal_tutup_pendaftaran" => (new DateTime($event->tanggal_tutup_pendaftaran))->format('d F Y H:i'),
            "user" => [
                "id" => $event->user->id,
                "nama" => $event->user->nama,
            ],
            "tipe_event" => $event->tipeEvent->nama,

        ];
        return Inertia::render('Events/Detail', [
            'event' => $eventDetails
        ]);
    }

    public function edit($id) {
        $event = Event::find($id);
        $tipe_event = TipeEvent::all();

        return Inertia::render('Events/Edit', ['event' => $event, 'tipe_event' => $tipe_event]);
    }

    public function store(Request $request): RedirectResponse {
        $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'tipe_event_id' => 'required',
            'tanggal' => 'required',
            'alamat' => 'required',
            'jumlah_tiket' => 'required',
            'harga' => 'required',
            'banner' => 'required',
            'tanggal_buka_pendaftaran' => 'required',
            'tanggal_tutup_pendaftaran' => 'required',
        ]);
        $fileName = $request->nama.time().'.jpg';

        $request->banner->storeAs('public/images/banner', $fileName);

        Event::create([
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'tanggal' => $request->tanggal,
            'alamat' => $request->alamat,
            'jumlah_tiket' => $request->jumlah_tiket,
            'harga' => $request->harga,
            'banner' => $fileName,
            'tanggal_buka_pendaftaran' => $request->tanggal_buka_pendaftaran,
            'tanggal_tutup_pendaftaran' => $request->tanggal_tutup_pendaftaran,
            'tipe_event_id' => $request->tipe_event_id,
            'user_id' => $request->user()->id,
            'admin_id' => User::all()->where('role', 'admin')->random(1)->value('id'),
        ]);
   
        return Redirect::route("events.index");
    }


    public function update(Request $request) {
        $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'tipe_event_id' => 'required',
            'tanggal' => 'required',
            'alamat' => 'required',
            'jumlah_tiket' => 'required',
            'harga' => 'required',
            'banner' => 'required',
            'tanggal_buka_pendaftaran' => 'required',
            'tanggal_tutup_pendaftaran' => 'required',
        ]);

        $event = Event::find($request->id);
        
        if (gettype($request->banner) == 'object') {
            $request->banner->storeAs('public/images/banner', $event->banner);
        } 
        

        $event->update([
            'nama' => $request->nama,
            'deskripsi' => $request->deskripsi,
            'tipe_event_id' => $request->tipe_event_id,
            'tanggal' => $request->tanggal,
            'alamat' => $request->alamat,
            'jumlah_tiket' => $request->jumlah_tiket,
            'harga' => $request->harga,
            'tanggal_buka_pendaftaran' => $request->tanggal_buka_pendaftaran,
            'tanggal_tutup_pendaftaran' => $request->tanggal_tutup_pendaftaran,
        ]);

        return Redirect::route('dashboard.events');
    }

    public function delete(Request $request) {
        $event = Event::find($request->id);

        $event->delete();
    }
}


