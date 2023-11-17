<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class tiket extends Model
{
    public $timestamps = false;
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
    public function tiket()
    {
        return $this->belongsToMany(Tiket::class);
    }
}
