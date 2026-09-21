import { cn } from "@/lib/utils";
import { RevealWrapper } from "./RevealWrapper";

interface Props {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
    as?: "h1" | "h2";
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className, as = "h2" }: Props) {
    const Heading = as;
    return (
        <RevealWrapper className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <Heading className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-ink">
                {title}
            </Heading>
            {subtitle && <p className="mt-4 text-base md:text-lg text-ink-dim leading-relaxed">{subtitle}</p>}
        </RevealWrapper>
    );
}
