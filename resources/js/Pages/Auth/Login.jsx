import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Layout withNavbar={false}>
            <div className="flex w-screen">
                <section className="flex flex-col justify-center gap-8 w-5/12 h-screen px-16 bg-primary-50">
                    <div className="w-full text-center">
                        <h1 className="text-4xl font-bold">Login</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
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
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 w-full mt-4">
                            <PrimaryButton
                                className="w-full"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                            <div className="text-primary-900">
                                Belum memiliki akun?{" "}
                                <Link href={route("register")}>
                                    <span className="text-primary-500 underline">
                                        Daftar
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
