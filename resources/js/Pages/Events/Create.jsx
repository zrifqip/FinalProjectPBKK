import InputError from "@/Components/InputError.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import TextInput from "@/Components/TextInput.jsx";
import Layout from "@/Layouts/Layout.jsx";
import { useForm } from "@inertiajs/react";

export default function CreateEvent({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        deskripsi: "",
        tanggal: "",
        alamat: "",
        jumlah_tiket: 0,
        harga: 0,
        tanggal_tutup_pendaftaran: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("events.store"));
    };

    return (
        <Layout user={auth.user} title="New Event">
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
                            Create
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
