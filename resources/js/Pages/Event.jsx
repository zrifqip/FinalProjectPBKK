import EventCard from "@/Components/Event/EventCard";
import InputLabel from "@/Components/InputLabel";
import Layout from "@/Layouts/Layout";
import { router } from "@inertiajs/react";

export default function Event({ auth, events, tipe_event, filter }) {
    const onChange = (e) => {
        e.preventDefault();

        router.get(route("events.index", { filter: e.target.value }));
    };
    return (
        <Layout withNavbar user={auth.user} title="Events">
            <div className="max-w-7xl">
                <h1 className="w-full text-4xl mb-4">Events Available</h1>
                <div className="flex flex-col gap-1 items-start mb-4">
                    <InputLabel htmlFor="filter" value="Filter" />

                    <select
                        id="filter"
                        name="filter"
                        defaultValue={filter}
                        onChange={onChange}
                    >
                        <option value="" disabled>
                            Pilih Tipe Event
                        </option>
                        {tipe_event.map((tipe) => (
                            <option key={tipe.id} value={tipe.id}>
                                {tipe.nama}
                            </option>
                        ))}
                    </select>
                </div>
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
