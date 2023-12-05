import FileView from "@/Components/FileView";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";

export default function EditEvent({ auth, event, tipe_event }) {
    const { data, setData, post, processing, errors } = useForm({
        id: event.id,
        nama: event.nama,
        tipe_event_id: event.tipe_event_id,
        deskripsi: event.deskripsi,
        tanggal: event.tanggal,
        alamat: event.alamat,
        jumlah_tiket: event.jumlah_tiket,
        harga: event.harga,
        banner: `banner/${event.banner}`,
        tanggal_buka_pendaftaran: event.tanggal_buka_pendaftaran,
        tanggal_tutup_pendaftaran: event.tanggal_tutup_pendaftaran,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("events.update"));
    };

    return (
        <Layout user={auth.user} title="Event">
            <div className="w-full max-w-7xl">
                <form onSubmit={submit}>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <InputLabel htmlFor="nama" value="Nama Event" />

                            <TextInput
                                id="nama"
                                type="text"
                                name="nama"
                                value={data.nama}
                                className=""
                                isFocused
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.nama}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <InputLabel htmlFor="deskripsi" value="Deskripsi" />

                            <TextAreaInput
                                id="deskripsi"
                                name="deskripsi"
                                value={data.deskripsi}
                                className="resize-none"
                                onChange={(e) =>
                                    setData("deskripsi", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.deskripsi}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <InputLabel
                                htmlFor="tipe_event_id"
                                value="Tipe Event"
                            />

                            <select
                                id="tipe_event_id"
                                name="tipe_event_id"
                                defaultValue=""
                                value={data.tipe_event_id}
                                onChange={(e) =>
                                    setData("tipe_event_id", e.target.value)
                                }
                            >
                                <option value="" disabled>
                                    Pilih Tipe Event
                                </option>
                                {tipe_event.map((tipe) => (
                                    <option value={tipe.id}>{tipe.nama}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <InputLabel htmlFor="tanggal" value="Tanggal" />

                            <TextInput
                                id="tanggal"
                                type="datetime-local"
                                name="tanggal"
                                value={data.tanggal}
                                className=""
                                onChange={(e) =>
                                    setData("tanggal", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.tanggal}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <InputLabel htmlFor="alamat" value="Alamat" />

                            <TextInput
                                id="alamat"
                                type="text"
                                name="alamat"
                                value={data.alamat}
                                className=""
                                onChange={(e) =>
                                    setData("alamat", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.alamat}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <InputLabel
                                htmlFor="jumlah_tiket"
                                value="Jumlah Tiket"
                            />

                            <TextInput
                                id="jumlah_tiket"
                                type="number"
                                name="jumlah_tiket"
                                value={data.jumlah_tiket}
                                className=""
                                onChange={(e) =>
                                    setData("jumlah_tiket", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.jumlah_tiket}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <InputLabel htmlFor="harga" value="Harga Tiket" />

                            <TextInput
                                id="harga"
                                type="number"
                                name="harga"
                                value={data.harga}
                                className=""
                                onChange={(e) =>
                                    setData("harga", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.harga}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-1 flex-1">
                                <InputLabel
                                    htmlFor="tanggal_buka_pendaftaran"
                                    value="Buka Pendaftaran Dari"
                                />

                                <TextInput
                                    id="tanggal_buka_pendaftaran"
                                    type="datetime-local"
                                    name="tanggal_buka_pendaftaran"
                                    value={data.tanggal_buka_pendaftaran}
                                    onChange={(e) =>
                                        setData(
                                            "tanggal_buka_pendaftaran",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <InputLabel
                                    htmlFor="tanggal_tutup_pendaftaran"
                                    value="Buka Pendaftaran Hingga"
                                />

                                <TextInput
                                    id="tanggal_tutup_pendaftaran"
                                    type="datetime-local"
                                    name="tanggal_tutup_pendaftaran"
                                    value={data.tanggal_tutup_pendaftaran}
                                    onChange={(e) =>
                                        setData(
                                            "tanggal_tutup_pendaftaran",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <InputError
                                message={errors.harga}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col items-start gap-1">
                            <InputLabel htmlFor="banner" value="Banner" />
                            <input
                                id="banner"
                                name="banner"
                                type="file"
                                onChange={(e) =>
                                    setData("banner", e.target.files[0])
                                }
                            />
                            {data.banner && (
                                <FileView
                                    text="Lihat File"
                                    file={data.banner}
                                />
                            )}
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <PrimaryButton
                            className="w-full "
                            disabled={processing}
                        >
                            Buat
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
