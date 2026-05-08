import Image from "next/image";
import { WA_LINK_BASE } from "@/lib/constants";

const WA = WA_LINK_BASE;

const services = [
  {
    name: "HIFU Facial",
    tag: "Facial",
    description:
      "Lifting sin cirugía ni tiempo de recuperación. El ultrasonido focalizado estimula el colágeno en profundidad para tensar y rejuvenecer tu rostro de forma natural.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20HIFU%20facial`,
    image: {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=160&h=160&fit=crop&q=80",
      alt: "Tratamiento facial HIFU",
    },
  },
  {
    name: "Liposonix",
    tag: "Corporal",
    description:
      "Reducí medidas en las zonas que más te molestan. El ultrasonido de alta intensidad destruye células grasas de forma no invasiva, con resultados visibles y permanentes.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20Liposonix`,
    image: {
      src: "https://images.unsplash.com/photo-1761718209694-70031ee64f82?w=160&h=160&fit=crop&q=80",
      alt: "Tratamiento corporal Liposonix",
    },
  },
  {
    name: "Vela Slim",
    tag: "Corporal",
    description:
      "Tecnología de punta para combatir la celulitis y mejorar la textura de la piel. Combina radiofrecuencia, vacuoterapia e infrarrojo para resultados reales.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20Vela%20Slim`,
    image: {
      src: "https://images.unsplash.com/photo-1775133262667-316bd4d9e5b5?w=160&h=160&fit=crop&q=80",
      alt: "Tratamiento Vela Slim anticelulitis",
    },
  },
  {
    name: "Drenaje Linfático",
    tag: "Corporal",
    description:
      "Técnica manual de alto impacto para reducir la retención de líquidos, aliviar la pesadez y estimular la circulación. Ideal para recuperar el bienestar en pocas sesiones.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20drenaje%20linfático`,
    image: {
      src: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=160&h=160&fit=crop&q=80",
      alt: "Drenaje linfático manual",
    },
  },
  {
    name: "Drenaje Post-Operatorio",
    tag: "Corporal",
    description:
      "Especializado para recuperaciones quirúrgicas. Acelera la eliminación de inflamación, previene fibrosis y acompaña tu proceso de manera segura y profesional.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20drenaje%20post-operatorio`,
    image: {
      src: "https://images.unsplash.com/photo-1669979963541-bd1284171843?w=160&h=160&fit=crop&q=80",
      alt: "Drenaje linfático post-operatorio",
    },
  },
  {
    name: "Limpieza Facial Profunda",
    tag: "Facial",
    description:
      "Una sesión completa para desobstruir poros, equilibrar la producción de sebo y renovar la piel. Salís con el rostro limpio, luminoso y oxigenado.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20limpieza%20facial`,
    image: {
      src: "https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?w=160&h=160&fit=crop&q=80",
      alt: "Limpieza facial profunda spa",
    },
  },
  {
    name: "Microblading de Cejas",
    tag: "Belleza",
    description:
      "Cejas perfectas y naturales con técnica pelo a pelo. Diseñamos la forma ideal para tu rostro y el resultado dura hasta 18 meses.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20microblading`,
    image: {
      src: "https://images.unsplash.com/photo-1622336889416-8d790ad807d7?w=160&h=160&fit=crop&q=80",
      alt: "Microblading de cejas profesional",
    },
  },
  {
    name: "Lifting de Pestañas",
    tag: "Belleza",
    description:
      "Curvá y realzá tus pestañas naturales sin necesidad de rímmel ni rizador. El efecto dura 6 a 8 semanas y la mirada gana profundidad al instante.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20lifting%20de%20pestañas`,
    image: {
      src: "https://images.unsplash.com/photo-1735151226446-1d364b4adc2f?w=160&h=160&fit=crop&q=80",
      alt: "Lifting de pestañas profesional",
    },
  },
  {
    name: "Depilación Definitiva",
    tag: "Belleza",
    description:
      "Olvidate del vello para siempre con tecnología de última generación. Indolora, segura y efectiva en todos los fototipos de piel.",
    wa: `${WA}?text=Hola%20Karina%2C%20quiero%20información%20sobre%20depilación%20definitiva`,
    image: {
      src: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=160&h=160&fit=crop&q=80",
      alt: "Depilación definitiva profesional",
    },
  },
];

const tagColors: Record<string, string> = {
  Facial: "bg-calme-rose text-calme-terra",
  Corporal: "bg-calme-beige text-calme-dark",
  Belleza: "bg-calme-terra/10 text-calme-terra",
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-calme-terra mb-4">
            Tratamientos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-calme-dark">
            Nuestros Servicios
          </h2>
          <div className="w-12 h-px bg-calme-terra mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col p-8 border border-calme-border rounded-2xl hover:border-calme-terra/30 hover:shadow-lg hover:shadow-calme-rose/20 transition-all duration-300 bg-calme-cream"
            >
              {/* Service image */}
              <div className="mb-5">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-calme-border">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <span
                className={`self-start text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 ${tagColors[s.tag]}`}
              >
                {s.tag}
              </span>
              <h3 className="font-serif text-xl text-calme-dark mb-3">
                {s.name}
              </h3>
              <p className="text-calme-muted text-sm leading-relaxed flex-1 mb-6">
                {s.description}
              </p>
              <a
                href={s.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-xs tracking-wider text-calme-terra border-b border-calme-terra/30 pb-0.5 hover:border-calme-terra transition-colors duration-200 group-hover:border-calme-terra"
              >
                Consultar turno →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
