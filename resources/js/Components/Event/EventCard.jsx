import { Link } from "@inertiajs/react";
import {InertiaLink} from "@inertiajs/inertia-react";

export default function EventCard({
    id,
    nama,
    deskripsi,
    tanggal,
    alamat,
    jumlah_tiket,
    harga,
}) {
    return (
        <InertiaLink href={`/events/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
        <div className="flex flex-col gap-2 w-full rounded-md border px-8 py-4 shadow-md">
            <div className="w-full flex flex-col">
                    <p className="text-2xl line-clamp-1">{nama}</p>
                    <p className="text-sm">{tanggal}</p>
                </div>
                <div>
                    <p className="font-bold">Deskripsi Event</p>
                    <p className="line-clamp-3">{deskripsi}</p>
                </div>

                <div>
                    <p className="font-bold">Lokasi</p>
                    <p>{alamat}</p>
                </div>

                <div>
                    <p className="font-bold">Tiket Tersedia</p>
                    <p>{jumlah_tiket}</p>
                </div>

                <div>
                    <p className="font-bold">Harga Tiket</p>
                    <p>{harga}</p>
                </div>
        </div>
        </InertiaLink>

    );
}
