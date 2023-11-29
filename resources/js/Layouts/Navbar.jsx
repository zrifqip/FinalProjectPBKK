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
        <header className="fixed top-0 z-[100] w-full shadow-md">
            <div className="mx-auto max-w-7xl flex h-20 flex-row justify-between items-center px-12 py-6 bg-white">
                <nav className="flex flex-row items-center gap-8">
                    <Link href="/" className="text-xl">
                        ventik
                    </Link>
                    <ul className="flex flex-row gap-6">
                        {links.map(({ href, nama }, index) => (
                            <li key={index}>
                                <Link href={href}>{nama}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {user ? (
                    <div className="inline-flex items-center gap-8">
                        <Link href={route("events.new")}>Create</Link>
                        <div className="flex flex-row items-center gap-4">
                            <Link href={route("profile.edit")}>
                                {user.nama}
                            </Link>
                            <Link href={route("logout")} method="post">
                                <div className="border border-black px-4 py-2 rounded-xl">
                                    Log Out
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ms-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
