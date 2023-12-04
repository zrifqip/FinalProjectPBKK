export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `flex justify-center items-center px-4 py-2 bg-primary-900 border border-transparent rounded-md font-semibold text-base text-primary-100 hover:bg-primary-700 focus:bg-primary-700 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
