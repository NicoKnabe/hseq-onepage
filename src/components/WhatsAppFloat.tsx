import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function WhatsAppFloat() {
    return (
        <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hablar con un especialista por WhatsApp"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-black shadow-[0_8px_24px_rgba(37,211,102,0.35)] px-4 py-3 md:px-5 md:py-3.5 font-semibold text-sm transition-transform hover:scale-105"
        >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Hablar con un especialista</span>
            <span className="sm:hidden">WhatsApp</span>
        </a>
    );
}
