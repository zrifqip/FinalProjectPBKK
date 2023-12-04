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
                className={`min-h-screen flex flex-col items-center bg-primary-100 ${
                    withNavbar && "pt-32 pb-4"
                } ${className}`}
            >
                {children}
            </main>
        </div>
    );
}
