import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function UserDashboard({ auth, events }) {
    const nama = auth.user.nama.split(" ")[0];

    return (
        <Layout withNavbar user={auth.user} title="Dashboard">
            <div className="w-full max-w-7xl">
                <div>
                    <h1 className="text-4xl mb-4">Welcome {nama}</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="">
                        <Link href={route("profile.edit")}>
                            <div className="border rounded-xl w-full px-4 py-2">
                                <div>Profile</div>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <div className="flex flex-row justify-between">
                            <h2 className="text-lg mb-2">Your Events</h2>
                            <Link href={route("events.new")}>Create</Link>
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
                </div>
            </div>
        </Layout>
    );
}
