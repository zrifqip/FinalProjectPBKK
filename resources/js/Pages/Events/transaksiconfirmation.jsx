import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';
import Layout from "@/Layouts/Layout.jsx";
import {useForm} from "@inertiajs/react";

const PaymentConfirmation = ({auth,totalTickets, totalPrice,event }) => {
    const { data, setData, post, processing, errors, reset } = useForm(
        {
            bukti_pembayaran : '',
        totalTickets: totalTickets,
        totalPrice : totalPrice
    }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('transaction.confirmpayment',{event_id : event.id}));
    };

    return (
        <Layout withNavbar user={auth.user} title="Events">
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Payment Confirmation</h2>
            <p>{event.nama}</p>
            <p>Total Tickets: {totalTickets}</p>
            <p>Total Price: {totalPrice}</p>

            <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex items-center justify-start">
                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">Upload file</label>
                    <input  onChange={(e) => setData('bukti_pembayaran', e.target.value)} id="bukti_pembayaran" name="bukti_pembayaran" type="file" className="ml-5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block p-1 text-sm border w-100"></input>
                </div>

                {/* Button */}
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
        </Layout>
    );
};

export default PaymentConfirmation;
