<?php

namespace App\Http\Controllers;
 
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {
        $user = auth()->user();

        $events = User::find($user->id)->events;

        if ($user->role == "user") {
            return Inertia::render('Dashboard/User', ['events' => $events]);
        } elseif ($user->role == "admin") {
            return Inertia::render('/');
        }
    }
}
