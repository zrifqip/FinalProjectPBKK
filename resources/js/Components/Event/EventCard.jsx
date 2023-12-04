import { Link } from "@inertiajs/react";
import { numericFormatter } from "react-number-format";

export default function EventCard({
    id,
    nama,
    deskripsi,
    tanggal,
    alamat,
    jumlah_tiket,
    harga,
    banner,
}) {
    return (
        <Link href={route("events.detail", { id: id })}>
            <div className="flex flex-col gap-2 w-full rounded-xl bg-primary-50 shadow-md">
                <div className="relative w-full h-56">
                    <img
                        src={`/storage/images/banner/${banner}`}
                        alt={nama}
                        className="rounded-t-xl w-full h-full object-cover"
                    />
                    <div className="absolute hover:bg-gradient-to-b from-black from-20% via-transparent via-50% to-80% to-black w-full h-full top-0 opacity-25 rounded-t-xl rounded" />
                </div>
                <div className="w-full flex flex-col px-4 pb-4">
                    <p className="text-2xl line-clamp-1">{nama}</p>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-sm">{tanggal}</p>
                        <div className="flex flex-col items-end">
                            <p>{jumlah_tiket} Tiket</p>
                            <p className="font-bold text-xl">
                                Rp&nbsp;
                                {numericFormatter(harga, {
                                    decimalSeparator: ",",
                                    thousandSeparator: ".",
                                })}
                                ,-
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
