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
            $table->uuid('admin_id')->index();
            $table->unsignedInteger('event_id');
            $table->string('bukti_pembayaran');
            $table->string('status_pembayaran')->default("Belum Transaksi");
            $table->integer('total_tiket');
            $table->integer('harga_total');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('admin_id')->references('id')->on('users');
            $table->foreign('event_id')->references('id')->on('events');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi');
    }
};
