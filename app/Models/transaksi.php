<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    public $timestamps = true;

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function Tiket()
    {
        return $this->belongsToMany(Tiket::class);
    }
}
