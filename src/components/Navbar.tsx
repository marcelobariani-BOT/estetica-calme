"use client";

import { useState, useEffect } from "react";
import { WA_LINK_BASE } from "@/lib/constants";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#cursos", label: "Cursos" },
  { href: "#proximos-tratamientos", label: "Próximos turnos" },
  { href: "#sobre-mi", label: "Sobre Karina" },
  { href: "#contacto", label: "Contacto" },
];

const WA_URL = `${WA_LINK_BASE}?text=Hola%20Karina%2C%20quiero%20hacer%20una%20consulta`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-calme-cream/90 backdrop-blur-sm border-b border-calme-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-serif text-2xl tracking-[0.15em] text-calme-dark hover:text-calme-terra transition-colors duration-200"
        >
          Calme
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.1em] uppercase text-calme-muted hover:text-calme-terra transition-colors duration-200 whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-calme-terra text-white text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-calme-terra-dark transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 w-11 h-11"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-px bg-calme-dark transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-calme-dark transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-calme-dark transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[30rem]" : "max-h-0"}`}
      >
        <div className="border-t border-calme-border bg-calme-cream px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.12em] uppercase text-calme-dark hover:text-calme-terra transition-colors min-h-[44px] flex items-center"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-calme-terra text-white text-xs tracking-wider px-5 py-3.5 rounded-full hover:bg-calme-terra-dark transition-colors min-h-[44px]"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
