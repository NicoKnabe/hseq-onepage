import { SERVICES_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { ServicesExplorer } from "./ui/ServicesExplorer";

export function Services() {
    return (
        <section id="servicios" className="py-16 md:py-24 border-t border-white/10 bg-black-light">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader eyebrow={SERVICES_DATA.eyebrow} title={SERVICES_DATA.title} subtitle={SERVICES_DATA.subtitle} />
                <ServicesExplorer categories={SERVICES_DATA.categories} />
            </div>
        </section>
    );
}
