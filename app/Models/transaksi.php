<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class transaksi extends Model
{
    public $timestamps = true;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tiket()
    {
        return $this->belongsToMany(Tiket::class);
    }
}
