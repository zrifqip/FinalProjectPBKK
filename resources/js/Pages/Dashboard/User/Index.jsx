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
                    <Link href={route("profile.edit")}>
                        <div className="border rounded-xl w-full px-4 py-2">
                            <div>Profile</div>
                        </div>
                    </Link>
                    <Link href={route("dashboard.events")}>
                        <div className="border rounded-xl w-full px-4 py-2">
                            <div>Event Anda</div>
                        </div>
                    </Link>
                    <Link href={route("dashboard.transaksi")}>
                        <div className="border rounded-xl w-full px-4 py-2">
                            <div>Transaksi Anda</div>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
