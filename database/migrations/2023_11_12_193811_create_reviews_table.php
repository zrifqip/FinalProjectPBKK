<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('user_id');
            $table->unsignedInteger('event_id');
            $table->string('komentar')->nullable();
            $table->integer('rating');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('event_id')->references('id')->on('events');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
