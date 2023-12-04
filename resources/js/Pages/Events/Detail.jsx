import React, { useState} from "react";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import {Inertia} from "@inertiajs/inertia";


function Detail({ auth, event }) {


    if (!event) {
        return <div>Loading event details...</div>;
    }
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
        setTotalPrice(totalPrice + event.harga);
    };
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
            setTotalPrice(totalPrice - event.harga);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.visit(route('transaction.confirm-payment', {
            id: event.id,
            totalPrice: totalPrice, // Assuming you have this data in a state or prop
            totalTickets: count // Assuming you have this data in a state or prop
        }));
    };



    return (
        <Layout user={auth.user} title={event.nama}>
            <div className="max-w-7xl">
                <div className="mt-6">
                    <Link href={route("events.index")}>Kembali</Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 bg-white shadow-md rounded p-6">
                        <h1 className="text-xl font-bold mb-4">{event.nama}</h1>
                        <div>
                            <h2 className="font-semibold">Tanggal dan Waktu</h2>
                            <p>
                                <strong>Tanggal:</strong> {event.tanggal}
                            </p>
                            <p>
                                <strong>Waktu:</strong> {event.waktu}
                            </p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Lokasi</h2>
                            <p>{event.alamat}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Organizer</h2>
                            <p>{event.nama_user}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Tipe Event</h2>
                            <p>{event.tipe_event}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">
                                Tanggal Tutup Pendaftaran
                            </h2>
                            <p>{event.tanggal_tutup_pendaftaran}</p>
                        </div>
                        <div>
                            <h2 className="font-semibold">Deskripsi</h2>
                            <p>{event.deskripsi}</p>
                        </div>
                    </div>

                    <div className="col-12 lg:col-4">
                        <div className="p-3 h-full bg-white shadow-md rounded">
                            <p>Total Tiket</p>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 text-white px-3 py-2" onClick={handleDecrease}>-</button>
                                <span>{count}</span>
                                <button className="bg-blue-500 text-white px-3 py-2" onClick={handleIncrease}>+</button>
                            </div>
                            <p>Sisa tiket: {event.jumlah_tiket}</p>

                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                                Beli
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Detail;
