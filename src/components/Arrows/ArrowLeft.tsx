export default function ArrowLeft(
    {color, width, height}:{color?: string, width?: number, height?: number}
) {
    return (
        <svg width={`${width??33}`} height={`${height ?? 8}`} viewBox="0 0 33 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.7308 0.976313 4.7308 0.659731 4.53553 0.464469C4.34027 0.269206 4.02369 0.269206 3.82843 0.464469L0.646446 3.64645ZM33 3.5L1 3.5L1 4.5L33 4.5L33 3.5Z"
                fill={color ?? 'white'}/>
        </svg>
    );
}