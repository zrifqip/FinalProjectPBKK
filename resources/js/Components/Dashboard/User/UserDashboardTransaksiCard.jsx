import FileView from "@/Components/FileView";
import { Link } from "@inertiajs/react";

export default function UserDashboardTransaksiCard({ transaksi, ...props }) {
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

            <FileView
                text="Bukti Pembayaran"
                file={`pembayaran/${transaksi.bukti_pembayaran}`}
            />

            <div className="w-48">{transaksi.status_pembayaran}</div>
        </div>
    );
}
