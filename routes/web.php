<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/events', [EventsController::class, 'index']);

Route::middleware('auth')->group(function () {
    
    Route::get('/events/new', function () {
        return Inertia::render('Events/Create');
    })->name('events.new');
    Route::post('/events/new', [EventsController::class, 'store'])->name('events.store');
    
    Route::get('/events/detail/{id}', [EventsController::class, 'show'])->name('events.detail');

    Route::get('/events/detail/{id}/edit', [EventsController::class, 'edit'])->name('events.edit');
    
    Route::post('/events/edit', [EventsController::class, 'update'])->name('events.update');
    
    Route::post('/events/delete', [EventsController::class, 'delete'])->name('events.delete');
    Route::post('/events', [EventsController::class, 'store'])->name('events.store');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});


require __DIR__.'/auth.php';
