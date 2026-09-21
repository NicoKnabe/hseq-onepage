// Wordmark oficial de FireRent (misma marca tipográfica que usa firerent.cl).
export function FireRentLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 500 92" role="img" aria-label="FireRent" className={className}>
            <text
                fontFamily="var(--font-barlow), 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif"
                fontWeight={900}
                fontStyle="italic"
                fontSize={96}
                letterSpacing={-2}
            >
                <tspan x="10" y="88" fill="#14171A">FIRE</tspan>
                <tspan y="88" fill="#CC1F1F">RENT</tspan>
            </text>
        </svg>
    );
}
