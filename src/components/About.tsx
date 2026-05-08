import Image from "next/image";
import { WA_LINK_BASE } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-calme-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src="/karina.png"
                alt="Karina González - Estética Calme"
                width={560}
                height={660}
                className="w-full object-cover"
                priority
              />
            </div>
            {/* Decorative border */}
            <div className="absolute top-6 left-6 right-6 bottom-6 border border-calme-terra/20 rounded-2xl z-0" />
          </div>

          {/* Content */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-calme-terra mb-4">
              Sobre mí
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-calme-dark mb-2">
              Karina González
            </h2>
            <p className="text-calme-muted text-sm tracking-wider mb-8">
              Esteticista · Parque Chacabuco y Parque Centenario, CABA
            </p>

            <div className="space-y-5 text-calme-muted text-sm leading-[1.9]">
              <p>
                Soy esteticista con más de diez años de experiencia en tratamientos faciales y
                corporales. Desde el primer día me apasionó acompañar a cada persona en el
                cuidado de su piel y bienestar, con una mirada profesional pero también cercana.
              </p>
              <p>
                Me formé y me sigo formando continuamente para estar al día con las tecnologías
                más avanzadas. Trabajo con equipos de última generación —HIFU, Liposonix,
                Vela Slim— combinados con técnicas manuales que aprendí a lo largo de los años.
              </p>
              <p>
                Cada tratamiento es personalizado. No creo en las soluciones genéricas: escucho,
                evalúo y diseño un plan para vos. Eso es Calme: un espacio de confianza donde
                el resultado importa tanto como el proceso.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { value: "+10", label: "Años de experiencia" },
                { value: "+500", label: "Clientas satisfechas" },
                { value: "3", label: "Cursos de formación" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl text-calme-terra">{stat.value}</p>
                  <p className="text-[10px] tracking-wider uppercase text-calme-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={`${WA_LINK_BASE}?text=Hola%20Karina%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20los%20tratamientos`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border border-calme-terra text-calme-terra text-xs tracking-wider px-7 py-3.5 rounded-full hover:bg-calme-terra hover:text-white transition-all duration-200"
            >
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
