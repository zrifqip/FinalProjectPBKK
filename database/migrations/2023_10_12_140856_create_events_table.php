<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('user_id');
            $table->unsignedInteger('tipe_event_id');
            $table->string('nama');
            $table->mediumText('deskripsi');
            $table->dateTime('tanggal');
            $table->string('alamat');
            $table->integer('jumlah_tiket');
            $table->integer('harga');
            $table->dateTime('tanggal_tutup_pendaftaran');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('tipe_event_id')->references('id')->on('tipe_event');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
