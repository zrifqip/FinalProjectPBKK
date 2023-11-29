import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

function Detail({ auth, event }) {
    const [ticketQuantity, setTicketQuantity] = useState(1);

    const handleBuyTickets = () => {
        console.log(`Buying ${ticketQuantity} tickets for event ${event.name}`);
    };

    if (!event) {
        return <div>Loading event details...</div>;
    }

    const totalCost = event.harga * ticketQuantity;
    const ticketsLeft = event.jumlah_tiket - ticketQuantity;

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
                            <h2 className="text-900 font-medium text-xl mb-4">
                                Beli Tiket
                            </h2>

                            {/* Ticket Quantity Input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="ticketQuantity"
                                    className="block text-sm font-medium mb-1"
                                >
                                    Jumlah Tiket
                                </label>
                                <InputNumber
                                    id="ticketQuantity"
                                    value={ticketQuantity}
                                    onValueChange={(e) =>
                                        setTicketQuantity(e.value)
                                    }
                                    min={1}
                                    max={event.jumlah_tiket}
                                />
                            </div>

                            {/* Pricing Details */}
                            <div className="mb-4">
                                <p>Sisa tiket: {ticketsLeft}</p>
                                <p>
                                    <strong>Harga Tiket:</strong> Rp
                                    {event.harga.toFixed(2)}
                                </p>
                                <p>
                                    <strong>Jumlah Harga:</strong> Rp
                                    {totalCost.toFixed(2)}
                                </p>
                            </div>

                            {/* Buy Ticket Button */}
                            <Button
                                label="Beli Tiket"
                                className="p-3 w-full p-button-success"
                                onClick={handleBuyTickets}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Detail;
