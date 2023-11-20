<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    public $timestamps = true;

    protected $table = 'transaksi';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tiket()
    {
        return $this->belongsToMany(Tiket::class);
    }
}
