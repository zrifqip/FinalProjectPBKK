import EventCard from "@/Components/Event/EventCard";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Home({ auth }) {
    return (
        <Layout
            withNavbar
            title="Home"
            user={auth.user}
            className="justify-center"
        >
            <div className="max-w-7xl text-center">
                <h1 className="text-7xl mb-4">ventik</h1>
                <p className="w-full text-2xl mb-4">
                    Buatlah dan Ikuti Event dengan Mudah!
                </p>
            </div>
        </Layout>
    );
}
