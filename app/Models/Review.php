<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'komentar',
        'rating',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the event that the Review belongs to.
     */
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}

