<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\View\View;

class EventsController extends Controller
{
    public function index(): View {
        $data = Event::all();

        $events = [];

        foreach ($data as $d) {
            array_push($events, [
                "name" => $d->name,
                "description" => $d->description,
                "date" => date_format(date_create($d->startDate), 'dS F Y'),
                "time" => date_format(date_create($d->startDate), 'H:i'),
                "organizer" => $d->organizer,
                "place" => $d->place,
            ]);
        }

        return view('dashboard', ['events' => $events]);
    }
}
