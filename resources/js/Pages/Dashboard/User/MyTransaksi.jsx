import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function MyEvents({ auth, events }) {
    return (
        <Layout user={auth.user} title="Event Anda">
            <div className="w-full max-w-7xl">
                <div className="flex flex-row justify-between">
                    <h2 className="text-4xl mb-2">Transaksi Anda</h2>
                </div>
            </div>
        </Layout>
    );
}
