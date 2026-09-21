import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { CONTACT_DATA } from "@/lib/data";
import { SITE, whatsappLink } from "@/lib/site";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { ContactForm } from "./ContactForm";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Contact() {
    return (
        <section id="contacto" className="py-16 md:py-24 border-t border-line bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-2">
                        <SectionHeader eyebrow={CONTACT_DATA.eyebrow} title={CONTACT_DATA.title} subtitle={CONTACT_DATA.subtitle} />
                        <RevealWrapper delay={0.1} className="mt-8 space-y-3">
                            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
                                <WhatsAppIcon className="w-5 h-5" />
                                Hablar con un especialista
                            </a>
                            <ul className="pt-4 space-y-3 text-sm">
                                <li className="flex items-center gap-3 text-ink-dim">
                                    <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                                    <a href={`tel:+${SITE.phoneE164}`} className="hover:text-accent">{SITE.phoneDisplay}</a>
                                </li>
                                <li className="flex items-center gap-3 text-ink-dim">
                                    <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                                    <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
                                </li>
                                <li className="flex items-center gap-3 text-ink-dim">
                                    <Linkedin className="w-4 h-4 text-accent" aria-hidden="true" />
                                    <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
                                </li>
                                <li className="flex items-start gap-3 text-ink-dim">
                                    <MapPin className="w-4 h-4 mt-0.5 text-accent" aria-hidden="true" />
                                    <span>{SITE.location}. {SITE.coverage}</span>
                                </li>
                            </ul>
                        </RevealWrapper>
                    </div>
                    <RevealWrapper delay={0.15} className="lg:col-span-3 card p-6 md:p-8">
                        <ContactForm />
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
