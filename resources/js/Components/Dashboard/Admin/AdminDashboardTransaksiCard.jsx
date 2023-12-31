// import FileView from "@/Components/FileView";
import { Link, router } from "@inertiajs/react";

export default function AdminDashboardTransaksiCard({ transaksi, ...props }) {
    const onChange = (e) => {
        e.preventDefault();
        router.post(
            route("dashboard.transaksi.update", {
                id: transaksi.id,
                status_pembayaran: e.target.value,
            })
        );
    };

    return (
        <div
            {...props}
            className="flex items-center justify-between px-4 py-2 rounded-xl border"
        >
            <Link
                href={route("events.detail", {
                    id: transaksi.event.id,
                })}
            >
                {transaksi.event.nama}
            </Link>
            <div>{transaksi.user.nama}</div>
            <div>{transaksi.total_tiket}</div>
            <div>{transaksi.harga_total}</div>

            {/* <FileView file={transaksi.bukti_pembayaran} /> */}

            <select id="" defaultValue="" onChange={onChange} className="w-48">
                <option value="" disabled>
                    {transaksi.status_pembayaran}
                </option>
                <option value="Terima">Terima</option>
                <option value="Tolak">Tolak</option>
                <option value="Revisi">Revisi</option>
            </select>
        </div>
    );
}
