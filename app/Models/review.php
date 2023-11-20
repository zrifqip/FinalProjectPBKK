<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'komentar',
        'rating',
    ];
    protected $with = ['user', 'event'];
    public function User()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the event that the Review belongs to.
     */
    public function Event()
    {
        return $this->belongsTo(Event::class);
    }
}

