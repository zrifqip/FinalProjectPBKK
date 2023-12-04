<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    // The attributes that are mass assignable.
    protected $fillable = [
        'user_id',
        'event_id',
        'bukti_pembayaran',
        'status_pembayaran',
        'payment_date',
        'total_tiket',
        'harga_total',
        'admin_id',
    ];

    protected $table = 'transaksi'; 

    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }
    public function userAsCustomer()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function userAsAdmin()
    {
        return $this->belongsTo(User::class, 'admin_user_id');
    }
    public function tikets()
    {
        return $this->hasMany(Tiket::class, 'transaksi_id');
    }
}
