"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";
import { CONTACT_DATA, PLANS_DATA } from "@/lib/data";
import { mailtoLink, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

const INITIAL = {
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
    trabajadores: "",
    region: "",
    servicio: "",
    mensaje: "",
};

function buildMessage(f: typeof INITIAL) {
    const lines = [
        "Hola, quiero solicitar una evaluación para mi empresa.",
        "",
        `Nombre: ${f.nombre}`,
        `Empresa: ${f.empresa}`,
        f.cargo && `Cargo: ${f.cargo}`,
        `Email: ${f.email}`,
        f.telefono && `Teléfono: ${f.telefono}`,
        f.trabajadores && `Trabajadores: ${f.trabajadores}`,
        f.region && `Región: ${f.region}`,
        `Servicio: ${f.servicio}`,
        f.mensaje && `Mensaje: ${f.mensaje}`,
    ].filter(Boolean);
    return lines.join("\n");
}

type Prefill = Partial<Pick<typeof INITIAL, "servicio" | "mensaje">>;

// Preselección desde enlaces internos: /?servicio=MIPER#contacto o /?plan=profesional#contacto
function prefillFromParams(params: URLSearchParams): Prefill {
    const plan = params.get("plan");
    const servicio = params.get("servicio");
    if (plan) {
        const p = PLANS_DATA.plans.find((x) => x.id === plan);
        return { servicio: "Prevención externa", mensaje: p ? `Me interesa el plan ${p.name}.` : "" };
    }
    if (servicio) {
        const match = CONTACT_DATA.services.find((s) => servicio.toLowerCase().includes(s.toLowerCase()));
        return { servicio: match ?? "Otro", mensaje: match ? "" : `Consulta por: ${servicio}` };
    }
    return {};
}

export function ContactForm() {
    return (
        <Suspense fallback={<ContactFormInner />}>
            <ContactFormWithParams />
        </Suspense>
    );
}

function ContactFormWithParams() {
    const params = useSearchParams();
    // key fuerza remontaje cuando cambian los parámetros (navegación interna desde planes/servicios)
    return <ContactFormInner key={params.toString()} prefill={prefillFromParams(params)} />;
}

function ContactFormInner({ prefill = {} }: { prefill?: Prefill }) {
    const [form, setForm] = useState({ ...INITIAL, ...prefill });
    const [sent, setSent] = useState<null | "whatsapp" | "email">(null);

    const update = (k: keyof typeof INITIAL) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [k]: e.target.value }));

    function submit(e: FormEvent, channel: "whatsapp" | "email") {
        e.preventDefault();
        const formEl = (e.currentTarget as HTMLElement).closest("form") as HTMLFormElement | null;
        if (formEl && !formEl.reportValidity()) return;
        const body = buildMessage(form);
        const url = channel === "whatsapp" ? whatsappLink(body) : mailtoLink(`Solicitud de evaluación: ${form.empresa}`, body);
        window.open(url, channel === "whatsapp" ? "_blank" : "_self", "noopener");
        setSent(channel);
    }

    return (
        <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => submit(e, "whatsapp")}>
            <label className="block">
                <span className="sr-only">Nombre</span>
                <input className="field" placeholder="Nombre *" required value={form.nombre} onChange={update("nombre")} autoComplete="name" />
            </label>
            <label className="block">
                <span className="sr-only">Empresa</span>
                <input className="field" placeholder="Empresa *" required value={form.empresa} onChange={update("empresa")} autoComplete="organization" />
            </label>
            <label className="block">
                <span className="sr-only">Cargo</span>
                <input className="field" placeholder="Cargo" value={form.cargo} onChange={update("cargo")} autoComplete="organization-title" />
            </label>
            <label className="block">
                <span className="sr-only">Email</span>
                <input className="field" type="email" placeholder="Email *" required value={form.email} onChange={update("email")} autoComplete="email" />
            </label>
            <label className="block">
                <span className="sr-only">Teléfono</span>
                <input className="field" type="tel" placeholder="Teléfono" value={form.telefono} onChange={update("telefono")} autoComplete="tel" />
            </label>
            <label className="block">
                <span className="sr-only">Número aproximado de trabajadores</span>
                <select className="field" value={form.trabajadores} onChange={update("trabajadores")}>
                    <option value="">Número de trabajadores</option>
                    {CONTACT_DATA.workerRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
            </label>
            <label className="block">
                <span className="sr-only">Región</span>
                <select className="field" value={form.region} onChange={update("region")}>
                    <option value="">Región</option>
                    {CONTACT_DATA.regions.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
            </label>
            <label className="block">
                <span className="sr-only">Servicio que necesita</span>
                <select className="field" required value={form.servicio} onChange={update("servicio")}>
                    <option value="">Servicio que necesitas *</option>
                    {CONTACT_DATA.services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
            </label>
            <label className="block sm:col-span-2">
                <span className="sr-only">Mensaje</span>
                <textarea className="field min-h-28" placeholder="Cuéntanos brevemente qué necesitas resolver" value={form.mensaje} onChange={update("mensaje")} />
            </label>

            <div className="sm:col-span-2 grid gap-3 sm:grid-cols-2">
                <button type="submit" className="btn-whatsapp w-full">
                    <WhatsAppIcon className="w-5 h-5" />
                    {CONTACT_DATA.cta} por WhatsApp
                </button>
                <button type="button" onClick={(e) => submit(e, "email")} className="btn-secondary w-full">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    Enviar por email
                </button>
            </div>

            {sent && (
                <p className="sm:col-span-2 text-sm text-accent" role="status">
                    {sent === "whatsapp"
                        ? "Se abrió WhatsApp con tu solicitud. Si no se abrió, escríbenos directamente al +56 9 5098 9084."
                        : "Se abrió tu cliente de correo con la solicitud. Si no se abrió, escríbenos a nknabe@qhse.cl."}
                </p>
            )}
            <p className="sm:col-span-2 text-xs text-muted">Tus datos se usan solo para responder tu solicitud.</p>
        </form>
    );
}
