<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tiket', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('transaksi_id')->index();
            $table->string('kode');

            $table->foreign('transaksi_id')->references('id')->on('transaksi');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tiket');
    }
};
