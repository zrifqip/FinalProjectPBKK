import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import { useForm } from "@inertiajs/react";

export default function EditEvent({ auth, event }) {
    const { data, setData, post, processing, errors } = useForm({
        id: event.id,
        nama: event.nama,
        deskripsi: event.deskripsi,
        tanggal: event.tanggal,
        alamat: event.alamat,
        jumlah_tiket: event.jumlah_tiket,
        harga: event.harga,
        tanggal_tutup_pendaftaran: event.tanggal_tutup_pendaftaran,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("events.update"));
    };

    return (
        <Layout user={auth.user} title="Event">
            <div className="w-full max-w-7xl">
                <form className="flex flex-col" onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="nama" value="Nama Event" />

                        <TextInput
                            id="nama"
                            type="text"
                            name="nama"
                            value={data.nama}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("nama", e.target.value)}
                        />

                        <InputError message={errors.nama} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="deskripsi" value="Deskripsi" />

                        <TextInput
                            id="deskripsi"
                            type="text"
                            name="deskripsi"
                            value={data.deskripsi}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.deskripsi}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="tanggal" value="Tanggal" />

                        <TextInput
                            id="tanggal"
                            type="datetime-local"
                            name="tanggal"
                            value={data.tanggal}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("tanggal", e.target.value)}
                        />

                        <InputError message={errors.tanggal} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="alamat" value="Alamat" />

                        <TextInput
                            id="alamat"
                            type="text"
                            name="alamat"
                            value={data.alamat}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("alamat", e.target.value)}
                        />

                        <InputError message={errors.alamat} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="jumlah_tiket"
                            value="Jumlah Tiket"
                        />

                        <TextInput
                            id="jumlah_tiket"
                            type="number"
                            name="jumlah_tiket"
                            value={data.jumlah_tiket}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData("jumlah_tiket", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.jumlah_tiket}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="harga" value="Harga Tiket" />

                        <TextInput
                            id="harga"
                            type="number"
                            name="harga"
                            value={data.harga}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("harga", e.target.value)}
                        />

                        <InputError message={errors.harga} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="tanggal_tutup_pendaftaran"
                            value="Buka Pendaftaran Hingga"
                        />

                        <TextInput
                            id="tanggal_tutup_pendaftaran"
                            type="datetime-local"
                            name="tanggal_tutup_pendaftaran"
                            value={data.tanggal_tutup_pendaftaran}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setData(
                                    "tanggal_tutup_pendaftaran",
                                    e.target.value
                                )
                            }
                        />

                        <InputError message={errors.harga} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <PrimaryButton disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
