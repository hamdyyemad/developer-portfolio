export default function SVGBioWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Top left decorative SVG */}
            <svg className="absolute -top-6 -left-6 w-24 h-24" viewBox="0 0 100 100" fill="none"><path d="M100,0 Q0,0 0,100" stroke="#FF9100" strokeWidth="4" strokeDasharray="8 8"/></svg>
            {children}
            {/* Bottom right decorative SVG */}
            <svg className="absolute -bottom-6 -right-6 w-24 h-24" viewBox="0 0 100 100" fill="none"><path d="M0,100 Q100,100 100,0" stroke="#FF9100" strokeWidth="4" strokeDasharray="8 8"/></svg>
        </>
    )
}   
