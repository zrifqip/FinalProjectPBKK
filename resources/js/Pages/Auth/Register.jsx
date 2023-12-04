import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        no_telp: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Layout withNavbar={false}>
            <div className="flex w-screen">
                <section className="flex flex-col justify-center gap-8 w-5/12 h-screen px-16 bg-primary-50">
                    <div className="w-full text-center">
                        <h1 className="text-4xl font-bold">Register</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="nama" value="Nama" />

                            <TextInput
                                id="nama"
                                name="nama"
                                value={data.nama}
                                className="mt-1 block w-full"
                                autoComplete="nama"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="no_telpon"
                                value="Nomor Telepon"
                            />
                            <TextInput
                                id="no_telpon"
                                type="text"
                                name="no_telpon"
                                value={data.no_telpon}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("no_telpon", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.no_telpon}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Konfirmasi Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 w-full mt-4">
                            <PrimaryButton
                                className="w-full"
                                disabled={processing}
                            >
                                Daftar
                            </PrimaryButton>
                            <div className="text-primary-900">
                                Sudah memiliki akun?{" "}
                                <Link href={route("login")}>
                                    <span className="text-primary-500 underline">
                                        Login
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="w-7/12 h-screen">
                    <div className="w-full h-full p-16">
                        <img
                            src="/storage/images/illustration/auth-illustration.jpg"
                            className="w-full h-full object-cover border-4 border-primary-500 rounded-xl p-8"
                        ></img>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
