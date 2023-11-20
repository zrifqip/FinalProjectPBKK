<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tiket', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->integer('event_id')->index();
            $table->integer('transaksi_id')->index();
            $table->string('kode');

            $table->foreign('event_id')->references('id')->on('events');
            $table->foreign('transaksi_id')->references('id')->on('transaksi');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tiket');
    }
};
