import React, { useState } from "react";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Detail({ auth, event }) {
    if (!event) {
        return <div>Loading event details...</div>;
    }
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const user = auth.user;

    return (
        <Layout user={user} title={event.nama}>
            <div className="flex flex-col gap-4 w-full max-w-7xl">
                <img
                    src={`/storage/images/banner/${event.banner}`}
                    className="w-full h-60 object-cover rounded-xl"
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 bg-white shadow-md rounded-xl p-6">
                        <h1 className="text-xl font-bold mb-4">{event.nama}</h1>
                        <div>
                            <p>{event.deskripsi}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Tanggal dan Waktu</h2>
                            {event.tanggal} {event.waktu}
                        </div>
                        <div>
                            <h2 className="font-semibold">Lokasi</h2>
                            <p>{event.alamat}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Penyelenggara</h2>
                            <p>{event.user.nama}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Tipe Event</h2>
                            <p>{event.tipe_event}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">
                                Tanggal Buka Pendaftaran
                            </h2>
                            <p>
                                {event.tanggal_buka_pendaftaran} -{" "}
                                {event.tanggal_tutup_pendaftaran}
                            </p>
                        </div>
                    </div>

                    {user.id === event.user.id ? (
                        <PrimaryButton className="h-fit">
                            <Link href={route("dashboard.events")}>
                                Lihat Dashboard
                            </Link>
                        </PrimaryButton>
                    ) : (
                        <div className="flex flex-col gap-4 p-3 h-full bg-white shadow-md rounded-xl">
                            <p>Jumlah Tiket</p>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 text-white px-3 py-2"
                                    onClick={handleDecrease}
                                >
                                    -
                                </button>
                                <span>{count}</span>
                                <button
                                    className="bg-blue-500 text-white px-3 py-2"
                                    onClick={handleIncrease}
                                >
                                    +
                                </button>
                            </div>
                            <p>Sisa tiket: {event.jumlah_tiket}</p>

                            <Link
                                href={route("transaksi.index", {
                                    id: event.id,
                                    jumlah_tiket: count,
                                })}
                                as="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Beli
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
