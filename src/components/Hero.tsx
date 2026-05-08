import { WA_LINK_BASE } from "@/lib/constants";

function BotanicalBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Main stem */}
      <path
        d="M42 4 C40 80 44 160 41 240 C38 320 43 400 40 476"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Leaf 1 – left @ y≈90 */}
      <path
        d="M41 90 C32 82 18 78 6 76 C18 82 32 88 41 90 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="41" y1="90" x2="8" y2="77" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      {/* Leaf 2 – right @ y≈175 */}
      <path
        d="M41 175 C50 167 64 163 76 161 C64 167 50 173 41 175 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="41" y1="175" x2="74" y2="162" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      {/* Leaf 3 – left @ y≈265 */}
      <path
        d="M41 265 C32 257 18 253 6 251 C18 257 32 263 41 265 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="41" y1="265" x2="8" y2="252" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      {/* Leaf 4 – right @ y≈355 */}
      <path
        d="M41 355 C50 347 64 343 76 341 C64 347 50 353 41 355 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="41" y1="355" x2="74" y2="342" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      {/* Small buds */}
      <path
        d="M40 418 C38 413 36 408 40 404 C44 408 42 413 40 418 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 444 C38 440 37 436 40 433 C43 436 42 440 40 444 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 bg-calme-cream overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(201,123,92,0.09) 1.5px, transparent 1.5px)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-calme-rose/40 blur-[120px]" />
      </div>

      {/* Left botanical branch */}
      <div className="absolute left-0 sm:left-6 lg:left-12 xl:left-20 top-1/2 -translate-y-1/2 pointer-events-none">
        <BotanicalBranch className="w-10 sm:w-20 lg:w-28 xl:w-32 h-auto text-calme-terra/55" />
      </div>

      {/* Right botanical branch (mirrored) */}
      <div
        className="absolute right-0 sm:right-6 lg:right-12 xl:right-20 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ transform: "translateY(-50%) scaleX(-1)" }}
      >
        <BotanicalBranch className="w-10 sm:w-20 lg:w-28 xl:w-32 h-auto text-calme-terra/55" />
      </div>

      {/* Floating petal circles */}
      <div className="absolute top-[18%] left-[9%] w-4 h-4 rounded-full bg-calme-terra/35 pointer-events-none" />
      <div className="absolute top-[38%] left-[6%] w-6 h-6 rounded-full bg-calme-rose/55 pointer-events-none" />
      <div className="absolute top-[12%] left-[20%] w-2 h-2 rounded-full bg-calme-terra/20 pointer-events-none" />
      <div className="absolute top-[22%] right-[9%] w-3.5 h-3.5 rounded-full bg-calme-terra/30 pointer-events-none" />
      <div className="absolute top-[55%] right-[7%] w-7 h-7 rounded-full bg-calme-rose/45 pointer-events-none" />
      <div className="absolute top-[70%] right-[14%] w-3 h-3 rounded-full bg-calme-rose/40 pointer-events-none" />
      <div className="absolute bottom-[28%] left-[13%] w-2.5 h-2.5 rounded-full bg-calme-terra/25 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-calme-terra mb-8">
          Centro de Estética Avanzada · Parque Chacabuco y Parque Centenario
        </p>

        <h1 className="font-serif text-[clamp(3.5rem,12vw,8rem)] text-calme-dark leading-none mb-6">
          Estética
          <br />
          <span className="italic font-light text-calme-terra">Calme</span>
        </h1>

        <p className="text-calme-muted text-base md:text-lg max-w-sm leading-relaxed mb-10">
          Tratamientos de precisión para realzar tu belleza natural.
          Resultados reales, en un espacio pensado para que te sientas bien.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`${WA_LINK_BASE}?text=Hola%20Karina%2C%20quiero%20consultar%20por%20un%20turno`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-calme-terra text-white px-8 py-3.5 rounded-full text-xs tracking-[0.1em] uppercase hover:bg-calme-terra-dark transition-colors duration-200"
          >
            Reservar turno
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center border border-calme-terra/40 text-calme-terra px-8 py-3.5 rounded-full text-xs tracking-[0.1em] uppercase hover:bg-calme-terra/5 transition-colors duration-200"
          >
            Ver tratamientos
          </a>
        </div>
      </div>
    </section>
  );
}
