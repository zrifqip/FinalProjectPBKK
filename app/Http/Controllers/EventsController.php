<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class EventsController extends Controller
{
    public function index(): View {
        $events = DB::table('events')->select('*')->get();

        return view('event.index', ['events' => $events]);
    }
}
