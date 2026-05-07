import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop&q=80",
    alt: "Tratamiento facial profesional — HIFU",
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1735151226446-1d364b4adc2f?w=800&h=1000&fit=crop&q=80",
    alt: "Lifting de pestañas profesional",
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?w=800&h=600&fit=crop&q=80",
    alt: "Limpieza facial profunda",
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1622336889416-8d790ad807d7?w=800&h=1000&fit=crop&q=80",
    alt: "Diseño y microblading de cejas",
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1775133262667-316bd4d9e5b5?w=800&h=600&fit=crop&q=80",
    alt: "Tratamiento corporal — Vela Slim",
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?w=800&h=600&fit=crop&q=80",
    alt: "Espacio Estética Calme",
    height: 600,
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 bg-calme-rose/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-calme-terra mb-4">
            Galería
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-calme-dark">
            Nuestro Espacio
          </h2>
          <div className="w-12 h-px bg-calme-terra mx-auto mt-6" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <div
              key={img.alt}
              className="break-inside-avoid overflow-hidden rounded-xl group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={img.height}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-calme-muted mt-10 tracking-wider">
          Seguinos en{" "}
          <a
            href="https://www.instagram.com/estetica.calme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-calme-terra hover:underline"
          >
            @estetica.calme
          </a>{" "}
          para ver resultados reales de nuestras clientas
        </p>
      </div>
    </section>
  );
}
