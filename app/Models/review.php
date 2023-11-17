<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class review extends Model
{
    protected $fillable = [
        'komentar',
        'rating',
    ];
    protected $with = ['user', 'event'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the event that the review belongs to.
     */
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}

