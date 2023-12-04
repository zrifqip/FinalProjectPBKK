import UserDashboardTransaksiCard from "@/Components/Dashboard/User/UserDashboardTransaksiCard";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function MyEvents({ auth, data }) {
    return (
        <Layout user={auth.user} title="Event Anda">
            <div className="w-full max-w-7xl">
                <div className="flex flex-row justify-between">
                    <h1 className="text-4xl mb-2">Transaksi Anda</h1>
                </div>
                <div className="flex flex-col gap-2">
                    {data.map((transaksi) => (
                        <UserDashboardTransaksiCard
                            transaksi={transaksi}
                            key={transaksi.id}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
