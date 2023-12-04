<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Str;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasUuids;
    public $timestamps = true;

    public $incrementing = false;

    protected $fillable = [
        'nama',
        'email',
        'password',
        'no_telpon',
        'role'
    ];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->{$user->getKeyName()} = (string) Str::uuid();
        });
    }
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    public function events()
    {
        return $this->hasMany(Event::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function transaksi()
    {
        return $this->hasMany(Transaksi::class);
    }
    public function transaksiAsCustomer()
    {
        return $this->hasMany(Transaksi::class, 'user_id');
    }

    public function transaksiAsAdmin()
    {
        return $this->hasMany(Transaksi::class, 'admin_user_id');
    }
}
