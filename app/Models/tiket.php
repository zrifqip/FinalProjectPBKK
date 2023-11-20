<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tiket extends Model
{
    public $timestamps = false;
    public function Event()
    {
        return $this->belongsTo(Event::class);
    }
    public function Transaksi()
    {
        return $this->belongsToMany(Transaksi::class);
    }
}
