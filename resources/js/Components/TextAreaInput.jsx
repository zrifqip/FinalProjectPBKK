import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            type={type}
            className={
                "border-primary-600 focus:border-primary-600 focus:ring-primary-600 rounded-md shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
