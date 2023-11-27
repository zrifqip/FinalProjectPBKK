import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";

export default function Layout({
    user,
    withNavbar = true,
    title,
    className,
    children,
}) {
    return (
        <div>
            {withNavbar && <Navbar user={user} />}
            <Head title={title} />
            <main
                className={`min-h-screen flex flex-col items-center pt-24 pb-4 ${className}`}
            >
                {children}
            </main>
        </div>
    );
}
