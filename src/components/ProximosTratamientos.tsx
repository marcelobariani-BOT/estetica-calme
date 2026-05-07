import data from "@/data/proximos-tratamientos.json";

const WA_BASE = "5491157659672";

const MONTHS: Record<number, string> = {
  1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun",
  7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic",
};
const WEEKDAYS: Record<number, string> = {
  0: "Dom", 1: "Lun", 2: "Mar", 3: "Mié", 4: "Jue", 5: "Vie", 6: "Sáb",
};

function parseDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return { day: d, month: MONTHS[m], weekday: WEEKDAYS[date.getUTCDay()] };
}

function makeWaUrl(nombre: string, fecha: string) {
  const text = encodeURIComponent(
    `Hola Karina, quiero reservar un turno de ${nombre} el ${fecha}`
  );
  return `https://wa.me/${WA_BASE}?text=${text}`;
}

const sedeBadge: Record<string, string> = {
  "Parque Chacabuco": "bg-calme-terra/10 text-calme-terra",
  "Parque Centenario": "bg-calme-beige text-calme-dark",
};

type Tratamiento = {
  id: number;
  nombre: string;
  fecha: string;
  descripcion: string;
  sede: string;
  promo: string | null;
  destacado: boolean;
};

export default function ProximosTratamientos() {
  const tratamientos = data as Tratamiento[];

  return (
    <section id="proximos-tratamientos" className="py-24 px-6 bg-calme-rose/15">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-calme-terra mb-4">
            Agenda
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-calme-dark">
            Próximos Turnos
          </h2>
          <div className="w-12 h-px bg-calme-terra mx-auto mt-6" />
          <p className="text-calme-muted text-sm max-w-sm mx-auto mt-6 leading-relaxed">
            Lugares disponibles en las próximas semanas. Reservá tu turno por WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {tratamientos.map((t) => {
            const { day, month, weekday } = parseDate(t.fecha);
            return (
              <article
                key={t.id}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-calme-cream rounded-2xl px-6 py-5 border transition-all duration-300 hover:shadow-md hover:shadow-calme-rose/20 ${
                  t.destacado
                    ? "border-calme-terra/30"
                    : "border-calme-border"
                }`}
              >
                {/* Date block */}
                <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 min-w-[64px] text-center">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-calme-muted sm:mb-0.5">
                    {weekday}
                  </span>
                  <span className="font-serif text-4xl leading-none text-calme-terra">
                    {day}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-calme-muted sm:mt-0.5">
                    {month}
                  </span>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px h-12 bg-calme-border shrink-0" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-serif text-lg text-calme-dark">
                      {t.nombre}
                    </h3>
                    {t.destacado && (
                      <span className="text-[9px] tracking-[0.15em] uppercase bg-calme-terra text-white px-2 py-0.5 rounded-full">
                        Destacado
                      </span>
                    )}
                    {t.promo && (
                      <span className="text-[9px] tracking-[0.15em] uppercase bg-calme-rose text-calme-terra-dark px-2 py-0.5 rounded-full font-medium">
                        {t.promo}
                      </span>
                    )}
                  </div>
                  <p className="text-calme-muted text-sm leading-relaxed mb-2">
                    {t.descripcion}
                  </p>
                  <span
                    className={`inline-block text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${sedeBadge[t.sede] ?? "bg-calme-beige text-calme-dark"}`}
                  >
                    {t.sede}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={makeWaUrl(t.nombre, t.fecha)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-calme-terra text-white text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-calme-terra-dark transition-colors duration-200 whitespace-nowrap"
                >
                  Reservar turno
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
