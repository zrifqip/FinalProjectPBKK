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
            <div className="bg-white shadow-md rounded p-6">
                <h1 className="text-xl font-bold mb-4">{event.name}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="mt-6">
                    <h2 className="font-semibold mb-2">Buy Tickets</h2>
                    <div className="flex items-center mb-2">
                        <InputNumber value={ticketQuantity} onValueChange={(e) => setTicketQuantity(e.value)} min={1} max={event.ticket_count} />
                        <Button label="Buy Ticket" className="p-button-success ml-2" onClick={handleBuyTickets} />
                    </div>
                    <p>Tickets left: {ticketsLeft}</p>
                    <p><strong>Price per Ticket:</strong> ${event.price}</p>
                    <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
                </div>

                <div className="mt-6">
                    <Button label="Back to Events" className="p-button-outlined" onClick={handleBackClick} />
                </div>
            </div>
        </div>
    );
}

export default Detail;


