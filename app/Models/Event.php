<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'startDate', 'organizer', 'place', 'ticket_count', 'price', 'close_date'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function types(){
        return $this->belongsTo(EventType::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function transaksi()
    {
        return $this->hasMany(Transaksi::class);
    }
}
