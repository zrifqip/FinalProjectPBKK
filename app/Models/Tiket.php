<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tiket extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'kode',
        'transaksi_id',
    ];
    protected $table = 'tiket';

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
    public function transaksi()
    {
        return $this->belongsTo(Transaksi::class);
    }
}
