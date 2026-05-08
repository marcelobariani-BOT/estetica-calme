import { WA_LINK_BASE } from "@/lib/constants";

const WA_URL = `${WA_LINK_BASE}?text=Hola%20Karina%2C%20quiero%20hacer%20una%20consulta`;

const zonas = [
  {
    nombre: "Parque Chacabuco",
    subtitulo: "Atendemos en zona Parque Chacabuco",
    mapSrc:
      "https://maps.google.com/maps?q=-34.6395,-58.4448&z=15&output=embed",
    mapTitle: "Zona Parque Chacabuco, CABA",
  },
  {
    nombre: "Parque Centenario",
    subtitulo: "Atendemos en zona Parque Centenario",
    mapSrc:
      "https://maps.google.com/maps?q=-34.6072,-58.4350&z=15&output=embed",
    mapTitle: "Zona Parque Centenario, CABA",
  },
];

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-calme-terra">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-calme-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-calme-terra mb-4">
            Encontranos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-calme-dark">
            Contacto
          </h2>
          <div className="w-12 h-px bg-calme-terra mx-auto mt-6 mb-6" />
          <p className="text-calme-muted text-sm max-w-sm mx-auto leading-relaxed italic font-serif">
            Dos parques, un solo espacio para vos.
          </p>
          <p className="text-calme-muted text-sm max-w-md mx-auto mt-2 leading-relaxed">
            Trabajamos en dos zonas de CABA para que siempre tengas una opción cerca.
          </p>
        </div>

        {/* Horarios + Hablemos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <h3 className="font-serif text-lg text-calme-dark mb-4">Horarios</h3>
            <div className="space-y-2 text-sm text-calme-muted">
              <div className="flex justify-between max-w-xs">
                <span>Lunes a Viernes</span>
                <span>9:00 – 19:00</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span>Sábados</span>
                <span>9:00 – 14:00</span>
              </div>
              <div className="flex justify-between max-w-xs text-calme-muted/50">
                <span>Domingos</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-calme-dark mb-4">Hablemos</h3>
            <div className="flex flex-col gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-calme-dark hover:text-calme-terra transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-calme-rose flex items-center justify-center shrink-0">
                  {WA_SVG}
                </span>
                +54 9 11 5765-9672
              </a>
              <a
                href="https://www.instagram.com/estetica.calme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-calme-dark hover:text-calme-terra transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-calme-rose flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-calme-terra">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </span>
                @estetica.calme
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-3 md:items-start">
            <h3 className="font-serif text-lg text-calme-dark">Reservá tu turno</h3>
            <p className="text-calme-muted text-sm leading-relaxed">
              Escribinos por WhatsApp y te confirmamos disponibilidad y zona en minutos.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-calme-terra text-white text-xs tracking-wider px-6 py-3 rounded-full hover:bg-calme-terra-dark transition-colors duration-200"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-calme-border mb-14" />

        {/* Dos zonas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zonas.map((z) => (
            <div key={z.nombre} className="flex flex-col gap-4">
              <div>
                <h3 className="font-serif text-2xl text-calme-dark">{z.nombre}</h3>
                <p className="text-calme-muted text-sm mt-1">{z.subtitulo}</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-calme-border h-[320px]">
                <iframe
                  title={z.mapTitle}
                  src={z.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-[10px] tracking-wider text-calme-muted/60 text-center">
                La dirección exacta se confirma al reservar tu turno
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
