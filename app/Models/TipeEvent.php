<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipeEvent extends Model
{
    public $timestamps = false;

    protected $table = 'tipe_event';

    public function events()
    {
        return $this->hasMany(Event::class);
    }

}
