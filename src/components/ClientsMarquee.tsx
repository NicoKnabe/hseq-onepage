import Image from "next/image";
import { TRUST_DATA } from "@/lib/data";
import { FireRentLogo } from "./ui/FireRentLogo";
import { RevealWrapper } from "./ui/RevealWrapper";

type Client = (typeof TRUST_DATA.clients)[number];

function Logo({ c, tabIndex }: { c: Client; tabIndex?: number }) {
    const inner = c.logo ? (
        <Image
            src={c.logo}
            alt={c.name}
            width={180}
            height={56}
            className="max-h-12 md:max-h-14 w-auto object-contain"
            unoptimized={c.logo.endsWith(".svg")}
        />
    ) : (
        <FireRentLogo className="h-8 md:h-9 w-auto" />
    );
    return (
        <a
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={tabIndex}
            aria-label={`Sitio de ${c.name}`}
            className="flex h-20 w-44 md:h-24 md:w-52 shrink-0 items-center justify-center rounded-xl border border-line bg-white px-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/60"
        >
            {inner}
        </a>
    );
}

// Franja de clientes: avanza sola y se detiene al pasar el mouse.
export function ClientsMarquee() {
    const clients = TRUST_DATA.clients;
    return (
        <section id="clientes" className="border-y border-line bg-surface py-12 md:py-16">
            <RevealWrapper className="container mx-auto px-4 md:px-6">
                <p className="text-center text-base md:text-lg font-semibold text-ink">{TRUST_DATA.clientsTitle}</p>
                <p className="mt-1 text-center text-sm text-muted">Construcción, minería, salud, ascensores, medio ambiente y servicios.</p>
            </RevealWrapper>

            <div className="marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]">
                <ul className="marquee-track flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4">
                    {clients.map((c) => (
                        <li key={c.name} className="pr-4 md:pr-6">
                            <Logo c={c} />
                        </li>
                    ))}
                    {/* Copia para que el carrusel no tenga cortes; oculta para lectores de pantalla. */}
                    {clients.map((c) => (
                        <li key={`${c.name}-dup`} aria-hidden="true" className="pr-4 md:pr-6 motion-reduce:hidden">
                            <Logo c={c} tabIndex={-1} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
