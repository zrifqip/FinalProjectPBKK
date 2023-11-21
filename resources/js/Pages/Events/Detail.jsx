import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Detail(props) {
    const { id } = useParams();
    const [event, setEvent] = useState(props.event || null);
    const [ticketQuantity, setTicketQuantity] = useState(1);

    useEffect(() => {
        if (!props.event) {
            Inertia.get(`/events/${id}`);
        }
    }, [id, props.event]);

    const handleBackClick = () => {
        Inertia.visit('/dashboard');
    };

    const handleBuyTickets = () => {
        console.log(`Buying ${ticketQuantity} tickets for event ${event.name}`);
    };

    if (!event) {
        return <div>Loading event details...</div>;
    }

    const totalCost = event.price * ticketQuantity;
    const ticketsLeft = event.ticket_count - ticketQuantity;

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white shadow-md rounded p-6">
                <h1 className="text-xl font-bold mb-4">{event.name}</h1>
                    <div>
                        <h2 className="font-semibold">Date and Time</h2>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p><strong>Time:</strong> {event.time}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Location</h2>
                        <p>{event.place}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Organizer</h2>
                        <p>{event.user_name}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Event Type</h2>
                        <p>{event.event_type}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Registration Close Date</h2>
                        <p>{event.close_date}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Description</h2>
                        <p>{event.description}</p>
                    </div>
                </div>

                <div className="col-12 lg:col-4">
                    <div className="p-3 h-full bg-white shadow-md rounded">
                        <h2 className="text-900 font-medium text-xl mb-4">Buy Tickets</h2>

                        {/* Ticket Quantity Input */}
                        <div className="mb-4">
                            <label htmlFor="ticketQuantity" className="block text-sm font-medium mb-1">Ticket Quantity</label>
                            <InputNumber id="ticketQuantity" value={ticketQuantity} onValueChange={(e) => setTicketQuantity(e.value)} min={1} max={event.ticket_count} />
                        </div>

                        {/* Pricing Details */}
                        <div className="mb-4">
                            <p>Tickets left: {ticketsLeft}</p>
                            <p><strong>Price per Ticket:</strong> ${event.price}</p>
                            <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
                        </div>

                        {/* Buy Ticket Button */}
                        <Button label="Buy Ticket" className="p-3 w-full p-button-success" onClick={handleBuyTickets} />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <Button label="Back to Events" className="p-button-outlined" onClick={handleBackClick} />
            </div>
        </div>

    );
}

export default Detail;


