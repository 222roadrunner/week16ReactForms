type PlainButtonProps = {
    theme: string,
    children: React.ReactNode, 
    onClick: () => void
}

export default function PlainButton({theme, children, onClick}: PlainButtonProps) {
    
    return (
        <button
            className={theme}
            onClick = {onClick}
        >
        {children}
        </button>
    )
}