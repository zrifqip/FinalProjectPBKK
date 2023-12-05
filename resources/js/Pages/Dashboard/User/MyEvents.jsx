import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function MyEvents({ auth, events }) {
    return (
        <Layout user={auth.user} title="Event Anda">
            <div className="w-full max-w-7xl">
                <div className="flex flex-row items-center gap-4 mb-4">
                    <h2 className="text-4xl">Event Anda</h2>
                </div>
                <div className="flex flex-col gap-2">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-row justify-between rounded-xl w-full px-8 py-4 bg-white shadow-md"
                        >
                            <div>{event.nama}</div>
                            <div className="flex gap-4">
                                <Link
                                    href={route("events.edit", {
                                        id: event.id,
                                    })}
                                >
                                    Edit
                                </Link>
                                <Link
                                    href={route("events.delete", {
                                        id: event.id,
                                    })}
                                    method="post"
                                    as="button"
                                    className="text-red-600"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
