import EventCard from "@/Components/Event/EventCard";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Event({ auth, events }) {
    return (
        <Layout withNavbar user={auth.user} title="Events">
            <div className="max-w-7xl">
                <h1 className="w-full text-4xl mb-4">Events Available</h1>
                <div className="w-full">
                    <div className="grid grid-cols-3 items-center gap-4">
                        {events.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
