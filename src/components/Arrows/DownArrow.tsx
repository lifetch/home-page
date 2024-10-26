export default function DownArrow(
    {color, width, height}: { color?: string, width?: number, height?: number }
) {
    return (
        <svg width={`${width ?? 24}`} height={`${height ?? 24}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 10L12 14L8 10" stroke={color ?? 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}