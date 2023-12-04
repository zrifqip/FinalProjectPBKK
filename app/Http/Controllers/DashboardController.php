<?php

namespace App\Http\Controllers;
 
use App\Models\Event;
use App\Models\Transaksi;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function index() {
        $user = auth()->user();
        
        if ($user->role == 'user') {
            return Inertia::render('Dashboard/User/Index');
        } elseif ($user->role == 'admin') {
            
            return Inertia::render('Dashboard/Admin/Index');
        }
    }
    
    function events() {
        $user = auth()->user();
        
        $events = User::find($user->id)->events;

        if ($user->role == 'user') {
            return Inertia::render('Dashboard/User/MyEvents', ['events' => $events]);
        } elseif ($user->role == 'admin') {
            $adminEvents = Event::where('admin_id', $user->id)->get();
            return Inertia::render('Dashboard/Admin/ManageEvents', ['events' => $adminEvents]);
        }
    }

}
