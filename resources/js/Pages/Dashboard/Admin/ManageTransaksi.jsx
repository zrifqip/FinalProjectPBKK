import AdminDashboardTransaksiCard from "@/Components/Dashboard/Admin/AdminDashboardTransaksiCard";
import Layout from "@/Layouts/Layout";

export default function ManageTransaksi({ auth, data }) {
    return (
        <Layout user={auth.user} title="Manage Transaksi">
            <div className="w-full max-w-7xl">
                <div>
                    <h1 className="text-4xl mb-4">Manage Transaksi</h1>
                </div>
                <div className="flex flex-col gap-2">
                    {data.map((transaksi) => (
                        <AdminDashboardTransaksiCard
                            transaksi={transaksi}
                            key={transaksi.id}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
