export default function Button({children, textOnlay,className, ...props}) {
    let cssClasses = textOnlay ? 'text-button' : 'button';
    cssClasses += ' ' + className;

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
}