// Ticket.js or a similar component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "@inertiajs/react";

export default function Ticket({ transaksi, ...props }) {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get(`/tickets/${transaksi.id}`)
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => console.error('Error fetching tickets:', error));
    }, [transaksi.id]);

    // Rest of your component...

    return (
        <div {...props} className="flex flex-col items-center justify-between px-4 py-2 rounded-xl border">
            {tickets.length > 0 && (
                <div className="w-full">
                    <div className="text-lg font-semibold">Your Tickets:</div>
                    {tickets.map((ticket, index) => (
                        <div key={index} className="flex items-center justify-between mt-2">
                            <div>Ticket #{ticket.id}</div>
                            <button
                                // onClick logic for QR code
                                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                            >
                                View QR Code
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
