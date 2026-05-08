# Estética Calme

Sitio web de **Estética Calme**, centro de estética avanzada de Karina González en Parque Chacabuco y Parque Centenario, CABA.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 con tema personalizado (`calme-*`)
- **Fuentes**: Playfair Display (serif, headings) + Inter (sans, body) — Google Fonts via `next/font`
- **Imágenes**: `next/image` para todas las imágenes (locales y Unsplash)

## Estructura

```
src/
  app/
    layout.tsx         # Metadata SEO (OG, Twitter, JSON-LD), fuentes
    page.tsx           # Página principal (single-page)
    sitemap.ts         # Sitemap automático para Next.js
    globals.css        # Tema de colores Tailwind (@theme)
  components/
    Navbar.tsx         # Navegación sticky con menú mobile
    Hero.tsx           # Hero section con branches botánicas SVG
    Services.tsx       # Grid de 9 servicios con links a WhatsApp
    Courses.tsx        # 3 cursos profesionales
    ProximosTratamientos.tsx  # Agenda de turnos desde JSON
    About.tsx          # Perfil de Karina González
    Gallery.tsx        # Galería masonry de 6 imágenes
    Contact.tsx        # Horarios, redes y mapas embebidos
    Footer.tsx         # Pie con nav y redes sociales
  data/
    proximos-tratamientos.json  # Turnos próximos (editar para actualizar agenda)
public/
  karina.png           # Foto principal de Karina
  robots.txt           # Directivas de crawleo
```

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build y deploy

```bash
npm run build
npm run start
```

El sitio está preparado para deploy en **Vercel** (zero-config).

## Datos a mantener

- **Teléfono WhatsApp**: buscar `5491157659672` en todos los componentes para actualizarlo si cambia
- **Próximos turnos**: editar `src/data/proximos-tratamientos.json`
- **URL de producción**: actualmente configurada como `https://www.esteticacalme.com.ar` en `layout.tsx`, `sitemap.ts` y `robots.txt`

## Colores del tema

| Token | Hex | Uso |
|-------|-----|-----|
| `calme-cream` | `#FAF6F1` | Fondo principal |
| `calme-dark` | `#2C2422` | Texto principal |
| `calme-terra` | `#C97B5C` | Acento / CTAs |
| `calme-terra-dark` | `#A5623F` | Hover de acento |
| `calme-muted` | `#9A8880` | Texto secundario |
| `calme-rose` | `#F4D9D0` | Fondos suaves |
| `calme-beige` | `#E8DCC8` | Fondos alternativos |
| `calme-border` | `#E0D0C8` | Bordes y separadores |
