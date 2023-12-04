import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";

export default function Navbar({ user }) {
    const links = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/dashboard",
            nama: "Dashboard",
        },
        {
            href: "/events",
            nama: "Events",
        },
    ];
    return (
        <header className="bg-primary-300 fixed top-0 z-[100] w-full rounded-b-3xl shadow-md">
            <div className="grid grid-cols-12 items-center mx-auto max-w-7xl h-24 px-12 py-6">
                <nav className="col-span-5 flex flex-row items-center gap-8">
                    <ul className="flex flex-row gap-6">
                        {links.map(({ href, nama }, index) => (
                            <li key={index}>
                                <Link href={href}>
                                    <div className="font-medium text-black text-lg hover:text-primary-900">
                                        {nama}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link
                    href="/"
                    className="flex justify-center col-span-2 text-3xl font-bold hover:scale-125 ease-in-out duration-200"
                >
                    ventik
                </Link>
                <div className="flex justify-end col-span-5">
                    {user ? (
                        <div className="flex flex-row items-center gap-4">
                            {user.role === "user" && (
                                <Link
                                    href={route("events.new")}
                                    className="text-black font-medium text-lg hover:text-primary-900"
                                >
                                    Create
                                </Link>
                            )}
                            <Link
                                href={route("profile.edit")}
                                className="text-black font-medium text-lg hover:text-primary-900"
                            >
                                {user.nama}
                            </Link>
                            <Link
                                href={route("logout")}
                                as="button"
                                method="post"
                                className="text-primary-900 font-medium hover:text-primary-200 rounded-full px-4 py-2 border-2 border-primary-400 hover:bg-primary-400"
                            >
                                Log Out
                            </Link>
                        </div>
                    ) : (
                        <div className="flex gap-4 text-lg font-medium">
                            <Link
                                href={route("login")}
                                className="text-black hover:text-primary-900"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="text-black hover:text-primary-900"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
