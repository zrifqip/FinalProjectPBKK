import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageView({ src }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                Lihat Bukti Pembayaran
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: `/storage/images/${src}` }]}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
            ></Lightbox>
        </>
    );
}
