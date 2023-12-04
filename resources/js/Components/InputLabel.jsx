export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label {...props} className={`text-sm text-primary-900 ` + className}>
            {value ? value : children}
        </label>
    );
}
