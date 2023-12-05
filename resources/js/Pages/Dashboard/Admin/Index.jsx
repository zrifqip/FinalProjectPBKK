import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";

export default function AdminDashboard({ auth }) {
    const nama = auth.user.nama.split(" ")[0];

    return (
        <Layout withNavbar user={auth.user} title="Dashboard">
            <div className="w-full max-w-7xl">
                <div>
                    <h1 className="text-4xl mb-4">Welcome {nama}</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <Link href={route("profile.edit")}>
                        <div className="rounded-xl w-full px-8 py-4 bg-white shadow-md hover:bg-primary-50">
                            <div>Profile</div>
                        </div>
                    </Link>
                    <Link href={route("dashboard.events")}>
                        <div className="rounded-xl w-full px-8 py-4 bg-white shadow-md hover:bg-primary-50">
                            <div>Manage Events</div>
                        </div>
                    </Link>
                    <Link href={route("dashboard.transaksi.index")}>
                        <div className="rounded-xl w-full px-8 py-4 bg-white shadow-md hover:bg-primary-50">
                            <div>Manage Transaksi</div>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
