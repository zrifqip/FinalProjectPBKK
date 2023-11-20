<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipeEvent extends Model
{
    public $timestamps = false;
    public function Event()
    {
        return $this->hasMany(Event::class);
    }

}
