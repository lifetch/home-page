export default function LinkArrow(
    {color, width, height}:{color?: string, width?: number, height?: number}
) {
    return (
        <svg width={`${width ?? 24}`} height={`${height ?? 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7" stroke={color ?? '#121212'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 7H17V15" stroke={color ?? '#121212'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
}