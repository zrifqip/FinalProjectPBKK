import React, { useState } from "react";
import Layout from "@/Layouts/Layout.jsx";
import { useForm } from "@inertiajs/react";

export default function PurchaseTiket({ auth, props }) {
    const { event, jumlah_tiket } = props;
    const { data, setData, post } = useForm({
        bukti_pembayaran: "",
        total_tiket: Math.max(jumlah_tiket, 1),
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("transaksi.confirm", { id: event.id }));
    };

    return (
        <Layout withNavbar user={auth.user} title="Events">
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">
                    Payment Confirmation
                </h2>
                <p>{event.nama}</p>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 text-white px-3 py-2"
                        type="button"
                        onClick={() =>
                            setData(
                                "total_tiket",
                                Math.max(data.total_tiket - 1, 1)
                            )
                        }
                    >
                        -
                    </button>
                    <span>{data.total_tiket}</span>
                    <button
                        className="bg-blue-500 text-white px-3 py-2"
                        type="button"
                        onClick={() =>
                            setData("total_tiket", data.total_tiket + 1)
                        }
                    >
                        +
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="mt-4">
                    <p>Harga: {data.total_tiket * event.harga}</p>
                    <div className="flex items-center justify-start">
                        <label
                            htmlFor="file-upload"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Upload file
                        </label>
                        <input
                            onChange={(e) =>
                                setData("bukti_pembayaran", e.target.files[0])
                            }
                            id="bukti_pembayaran"
                            name="bukti_pembayaran"
                            type="file"
                            className="ml-5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block p-1 text-sm border w-100"
                        ></input>
                    </div>

                    {/* Button */}
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
}
