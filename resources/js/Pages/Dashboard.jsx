import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head } from '@inertiajs/react';
import {Typography, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard({ auth, events }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Typography variant="h6" gutterBottom>
                                Upcoming Events
                            </Typography>
                            <List>
                                {events.map((event, index) => (
                                    <React.Fragment key={event.id}>
                                        <ListItem
                                            alignItems="flex-start"
                                            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                        >
                                            <InertiaLink href={`/events/${event.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                                                <div>
                                                    <ListItemText
                                                        primary={event.name}
                                                        secondary={
                                                            <>
                                                                <Typography
                                                                    sx={{ display: 'inline' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="text.primary"
                                                                >
                                                                    {event.date} - {event.place}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{ display: 'block' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                >
                                                                    {"Organized by: " + event.user_name}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{ display: 'block' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                >
                                                                    {"Event Type: " + event.event_type}
                                                                </Typography>
                                                            </>
                                                        }
                                                    />
                                                </div>
                                            </InertiaLink>
                                            <div style={{ textAlign: 'right' }}>
                                                <Typography
                                                    sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                                                    color="text.secondary"
                                                >
                                                    {"$" + event.price}
                                                </Typography>
                                            </div>
                                        </ListItem>
                                        {index < events.length - 1 && <Divider variant="inset" component="li" />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

