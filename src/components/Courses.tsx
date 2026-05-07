import Image from "next/image";

const WA = "https://wa.me/5491157659672";

const courses = [
  {
    number: "01",
    name: "Depilación Profesional",
    duration: "2 días intensivos",
    description:
      "Aprendé las técnicas más demandadas: cera fría, cera caliente y depilación con hilo. Formación completa con práctica supervisada y certificado de asistencia.",
    includes: ["Teoría y práctica", "Materiales incluidos", "Certificado"],
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20el%20curso%20de%20depilación%20profesional`,
    image: {
      src: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=160&h=160&fit=crop&q=80",
      alt: "Curso de depilación profesional",
    },
  },
  {
    number: "02",
    name: "Lifting y Diseño de Cejas",
    duration: "1 día intensivo",
    description:
      "Dominá el diseño de cejas según morfología facial y la técnica de lifting para un resultado natural y duradero. Ideal para comenzar o ampliar tu menú de servicios.",
    includes: ["Teoría y práctica", "Kit de inicio", "Certificado"],
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20el%20curso%20de%20lifting%20y%20diseño%20de%20cejas`,
    image: {
      src: "https://images.unsplash.com/photo-1622336889416-8d790ad807d7?w=160&h=160&fit=crop&q=80",
      alt: "Curso de lifting y diseño de cejas",
    },
  },
  {
    number: "03",
    name: "Extensión de Pestañas",
    duration: "2 días intensivos",
    description:
      "Técnica pelo a pelo para resultados ultra naturales. Aprendé colocación, mantenimiento y seguridad. Un servicio en creciente demanda que podés agregar a tu trabajo desde el día 1.",
    includes: ["Práctica en maniquí y modelo", "Kit completo", "Certificado"],
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20el%20curso%20de%20extensión%20de%20pestañas`,
    image: {
      src: "https://images.unsplash.com/photo-1735151226446-1d364b4adc2f?w=160&h=160&fit=crop&q=80",
      alt: "Curso de extensión de pestañas",
    },
  },
];

export default function Courses() {
  return (
    <section id="cursos" className="py-24 px-6 bg-calme-beige/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-calme-terra mb-4">
            Formación Profesional
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-calme-dark">
            Cursos con Karina
          </h2>
          <div className="w-12 h-px bg-calme-terra mx-auto mt-6" />
          <p className="text-calme-muted text-sm max-w-md mx-auto mt-6 leading-relaxed">
            Aprendé con una profesional con más de 10 años de experiencia en el rubro.
            Clases personalizadas, grupos reducidos y acompañamiento real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((c) => (
            <article
              key={c.number}
              className="flex flex-col bg-calme-cream rounded-2xl p-8 border border-calme-border hover:border-calme-terra/30 hover:shadow-lg hover:shadow-calme-rose/20 transition-all duration-300"
            >
              {/* Course image */}
              <div className="mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-calme-border">
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <span className="font-serif text-5xl text-calme-rose leading-none mb-4">
                {c.number}
              </span>
              <h3 className="font-serif text-xl text-calme-dark mb-1">
                {c.name}
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-calme-terra mb-4">
                {c.duration}
              </p>
              <p className="text-calme-muted text-sm leading-relaxed mb-6 flex-1">
                {c.description}
              </p>
              <ul className="mb-8 space-y-1.5">
                {c.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-calme-muted">
                    <span className="w-1 h-1 rounded-full bg-calme-terra inline-block shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={c.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-calme-terra text-white text-xs tracking-wider px-6 py-3 rounded-full hover:bg-calme-terra-dark transition-colors duration-200"
              >
                Quiero inscribirme
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
