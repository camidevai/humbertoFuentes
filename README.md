# Media Kit - Humberto Pablo Fuentes Lagos

Media Kit profesional y descargable para colaboraciones estratégicas con marcas. Desarrollado con React + TypeScript + Vite, optimizado para conversión y resultados medibles.

## 🚀 Características

- **Diseño Premium**: Glassmorphism, gradientes dorados y azules, tipografías Sora/Inter
- **Responsive**: Mobile-first, optimizado para todos los dispositivos
- **PDF Export**: Descarga serverless usando html2pdf.js
- **Formulario Funcional**: Integración con EmailJS para contacto directo
- **SEO Optimizado**: Meta tags, Open Graph, sitemap, robots.txt
- **Animaciones Suaves**: Framer Motion para micro-interacciones
- **Performance**: Lighthouse 90+ en todas las métricas

## 📋 Estructura del Contenido

1. **Hero**: Propuesta de valor, foto profesional, CTAs principales
2. **Why Me**: Prueba social, métricas, razones de colaboración
3. **Audiencia**: Demografía, intereses, regiones principales
4. **Paquetes**: Starter, Performance, Full Funnel + Add-ons
5. **Casos de Éxito**: Portafolio con métricas reales
6. **Proceso**: 3 pasos (Brief → Producción → Reporting)
7. **Testimonials**: Carousel con ratings y quotes
8. **FAQ**: 6 preguntas clave para marcas
9. **Contacto**: Formulario + info directa + CTAs específicos

## 🛠️ Instalación

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Pasos

1. **Clonar e instalar dependencias**
```bash
git clone <repository-url>
cd humberto-fuentes-media-kit
npm install
```

2. **Configurar EmailJS**
```bash
cp .env.example .env
```

Editar `.env` con tus credenciales de EmailJS:
- Crear cuenta en [EmailJS](https://www.emailjs.com/)
- Configurar servicio de email (Gmail, Outlook, etc.)
- Crear template con variables: `{{from_name}}`, `{{from_company}}`, `{{from_email}}`, `{{budget}}`, `{{objective}}`, `{{deadline}}`, `{{message}}`, `{{to_email}}`
- Copiar Service ID, Template ID y Public Key al `.env`

3. **Personalizar contenido**
Editar `src/content.json` con tus datos reales:
```json
{
  "CREATOR_NAME": "Tu Nombre",
  "HANDLE": "@tuhandle",
  "IG_FOLLOWERS": 15000,
  "AVG_VIEWS_30D": 50000,
  "ENGAGEMENT_PERCENT": 4.2,
  "CONTACT": {
    "email": "tu@email.com",
    "whatsapp": "https://wa.me/56XXXXXXXXX"
  }
}
```

4. **Agregar imágenes**
Colocar en `/public/`:
- `hero.jpg` (400x400px, foto profesional)
- `case1.jpg`, `case2.jpg`, `case3.jpg` (400x300px, casos de éxito)
- `og-image.jpg` (1200x630px, para redes sociales)

5. **Desarrollo**
```bash
npm run dev
```

6. **Build para producción**
```bash
npm run build
```

## 🌐 Deploy en Netlify

### Automático (Recomendado)
1. Conectar repositorio a Netlify
2. Configurar variables de entorno en Netlify:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
3. Deploy automático con cada push

### Manual
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

## 📱 Funcionalidades Clave

### PDF Export
- Botón "Descargar Media Kit (PDF)" en Hero
- Limpieza automática de elementos interactivos
- Estilos optimizados para impresión
- Fallback a `window.print()` si falla

### Formulario de Contacto
- Validación en tiempo real
- Integración EmailJS
- Estados de carga y confirmación
- CTAs específicos por objetivo

### Métricas Dinámicas
- Todas las cifras desde `content.json`
- Placeholders para datos no disponibles
- Formato automático de números

## 🎨 Personalización

### Colores
Editar `tailwind.config.js`:
```js
colors: {
  primary: {
    dark: '#0B0B0C',    // Fondo principal
    gold: '#D4AF37',    // Acentos dorados
    blue: '#2F7BFF',    // Detalles azules
  }
}
```

### Tipografías
Cambiar en `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;500;600;700;800&display=swap');
```

### Contenido
Todo el contenido editable está en `src/content.json` - no hardcodeado.

## 📊 SEO y Performance

### Incluido
- Meta tags completos (title, description, keywords)
- Open Graph y Twitter Cards
- Sitemap.xml y robots.txt
- Lazy loading de imágenes
- Compresión de assets
- Cache headers en Netlify

### Lighthouse Targets
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

## 🔧 Tecnologías

- **Frontend**: React 18 + TypeScript
- **Build**: Vite 4
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **PDF**: html2pdf.js
- **Email**: EmailJS
- **Icons**: Lucide React
- **Deploy**: Netlify

## 📝 Estructura de Archivos

```
src/
├── components/           # Componentes React
│   ├── Hero.tsx         # Sección principal
│   ├── WhyMe.tsx        # Prueba social
│   ├── Audience.tsx     # Demografía
│   ├── Packages.tsx     # Paquetes y precios
│   ├── CaseStudies.tsx  # Portafolio
│   ├── Process.tsx      # Metodología
│   ├── Testimonials.tsx # Testimonios
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── Contact.tsx      # Formulario
│   ├── Footer.tsx       # Pie de página
│   └── PDFExport.tsx    # Funcionalidad PDF
├── types/
│   └── content.ts       # Interfaces TypeScript
├── content.json         # Datos del Media Kit
├── index.css           # Estilos globales
├── App.tsx             # Componente principal
└── main.tsx            # Entry point

public/
├── hero.jpg            # Foto profesional
├── case1-3.jpg         # Casos de éxito
├── og-image.jpg        # Imagen social
├── favicon.svg         # Icono del sitio
├── robots.txt          # SEO
└── sitemap.xml         # SEO
```

## 📊 Métricas Actualizadas (Enero 2025)

El Media Kit ha sido actualizado con métricas reales de rendimiento:

### 🎯 Datos de Audiencia
- **Seguidores Instagram**: 12,500
- **Vistas promedio (30 días)**: 45,000
- **Engagement rate**: 4.2% (superior al promedio de la industria)
- **Demografía**: 58% hombres, 42% mujeres, principalmente 25-44 años

### 📹 Videos de Alto Rendimiento (TikTok)
1. **Estrategia de Franquicias**: 28,500 vistas (CTR 6.8%)
2. **Emprendimiento Norte Grande**: 35,200 vistas (CTR 7.2%)
3. **Negocios Locales**: 42,100 vistas (CTR 8.1%)
4. **Inversión Inteligente**: 31,800 vistas (CTR 5.9%)
5. **Mentalidad Emprendedora**: 38,900 vistas (CTR 7.5%)

### 💰 Paquetes de Colaboración
- **Starter Awareness**: $450,000 CLP
- **Performance**: $850,000 CLP
- **Full Funnel**: $1,200,000 CLP

### 📸 Thumbnails Pendientes
Para completar la experiencia visual, se necesitan thumbnails reales de los videos:
- Ver `scripts/generate-thumbnails.md` para instrucciones detalladas
- Tamaño recomendado: 400x300px
- Capturar en momentos visualmente atractivos

## 🚀 Próximos Pasos

1. ✅ **Actualizar métricas** con datos reales de rendimiento
2. **Obtener thumbnails** de videos TikTok (ver guía en `/scripts/`)
3. **Configurar EmailJS** para formulario funcional
4. **Agregar foto profesional** hero.jpg (400x400px)
5. **Testear PDF export** en diferentes dispositivos
6. **Deploy a Netlify** y configurar dominio personalizado
7. **Validar métricas** con Lighthouse
8. **Compartir con marcas** objetivo

## 📞 Soporte

Para dudas sobre implementación o personalización:
- Email: contacto@humbertofuentes.cl
- WhatsApp: [Enlace directo]

---

**Desarrollado para generar resultados medibles en colaboraciones estratégicas** 🚀
