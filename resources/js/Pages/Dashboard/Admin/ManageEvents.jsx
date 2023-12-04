import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function ManageEvents({ auth, events }) {
    return (
        <Layout user={auth.user} title="Manage Events">
            <div className="w-full max-w-7xl">
                <div>
                    <h1 className="text-4xl mb-4">Manage Events</h1>
                </div>
                <div className="flex flex-col gap-2">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex justify-between px-4 py-2 rounded-xl border"
                        >
                            <div>{event.nama}</div>
                            <div className="flex gap-4">
                                <Link
                                    href={route("events.edit", {
                                        id: event.id,
                                    })}
                                >
                                    <div clas>Edit</div>
                                </Link>
                                <Link
                                    href={route("events.delete", {
                                        id: event.id,
                                    })}
                                    method="post"
                                    as="button"
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
