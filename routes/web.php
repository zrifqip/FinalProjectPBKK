<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardTransaksiController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransaksiController;
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

Route::get('/events', [EventsController::class, 'index'])->name("events.index");

Route::middleware('auth')->group(function () {
    Route::get('/events/new', [EventsController::class, 'new'])->name('events.new');
    Route::post('/events/new', [EventsController::class, 'store'])->name('events.store');
    
    Route::get('/events/detail/{id}', [EventsController::class, 'show'])->name('events.detail');
    
    Route::get('/events/detail/{id}/edit', [EventsController::class, 'edit'])->name('events.edit');
    
    Route::post('/events/edit', [EventsController::class, 'update'])->name('events.update');
    
    Route::post('/events/delete', [EventsController::class, 'delete'])->name('events.delete');
    Route::post('/events', [EventsController::class, 'store'])->name('events.store');
    
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    Route::get('/dashboard/events', [DashboardController::class, 'events'])->name('dashboard.events');
    
    Route::get('/dashboard/transaksi', [DashboardTransaksiController::class, 'index'])->name('dashboard.transaksi.index');
    Route::post('/dashboard/transaksi', [DashboardTransaksiController::class, 'update'])->name('dashboard.transaksi.update');
    
    Route::get('/events/purchase/{id}', [TransaksiController::class, 'show'])->name('transaksi.index');
    Route::post('/events/purchase', [TransaksiController::class, 'confirm'])->name('transaksi.confirm');
    
});
require __DIR__.'/auth.php';
