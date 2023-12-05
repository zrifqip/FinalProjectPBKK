import { useEffect } from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function FileView({ text, file, className }) {
    const [open, setOpen] = useState(false);

    const src =
        typeof file === "string"
            ? `/storage/images/${file}`
            : URL.createObjectURL(file);

    useEffect(() => {
        URL.revokeObjectURL(src);
    }, [file]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`${className}`}
            >
                {text}
            </button>

            {file && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[{ src: src }]}
                    render={{
                        buttonPrev: () => null,
                        buttonNext: () => null,
                    }}
                />
            )}
        </>
    );
}
