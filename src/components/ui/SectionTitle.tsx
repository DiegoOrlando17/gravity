export default function SectionTitle({ children, kicker }: { children: React.ReactNode; kicker?: string }) {
    return (
        <div className="mb-8 md:mb-12">
            {kicker && <div className="uppercase tracking-[0.2em] text-xs text-white/60 mb-3">{kicker}</div>}
            <h2 className="text-3xl md:text-5xl font-black leading-tight">{children}</h2>
        </div>
    );
}