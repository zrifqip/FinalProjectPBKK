import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function FileView({ text, src, className }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`${className}`}
            >
                {text}
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
