<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = ['nama', 'deskripsi', 'tanggal', 'alamat', 'jumlah_tiket', 'harga', 'tanggal_tutup_pendaftaran', 'user_id', 'tipe_event_id'];
    protected $table = 'events';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function tipeEvent(){
        return $this->belongsTo(TipeEvent::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function tikets()
    {
        return $this->hasMany(Tiket::class);
    }
}
