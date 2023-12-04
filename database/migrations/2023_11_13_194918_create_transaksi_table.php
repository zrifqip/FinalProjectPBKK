<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('transaksi', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('user_id')->index();
            $table->string('bukti_pembayaran');
            $table->integer('event_id')->unsigned()->index();
            $table->string('status_pembayaran')->default("Belum Transaksi");
            $table->dateTime('payment_date');
            $table->integer('total_tiket');
            $table->integer('harga_total');
            $table->uuid('admin_user_id')->nullable()->index();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('event_id')->references('id')->on('events');
            $table->foreign('admin_user_id')->references('id')->on('users');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi');
    }
};
