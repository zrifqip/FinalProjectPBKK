<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'startDate', 'organizer', 'place', 'ticket_count', 'price', 'close_date'];
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    public function TipeEvent(){
        return $this->belongsTo(TipeEvent::class);
    }
    public function Reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function Transaksi()
    {
        return $this->hasMany(Transaksi::class);
    }
}
