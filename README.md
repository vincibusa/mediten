# Mediterranea Engineering - Sito Web

Replica moderna e rimodernata del sito web di Mediterranea
Engineering, società di ingegneria e consulenza
tecnico-economica con sede a Palermo.

## 🚀 Tecnologie Utilizzate

- **Next.js 15.5.4** - React framework con App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn UI** - Component library moderna
- **Framer Motion** - Animazioni fluide e interattive
- **Lucide React** - Icon library

## 🎨 Caratteristiche

### Design Moderno
- ✨ Animazioni fluide con Framer Motion
- 🎭 Card immersive con immagini full-size
- 📱 Design responsive mobile-first
- 🌗 Tema personalizzato con variabili CSS
- 🎯 UX/UI seguendo best practices 2025

### Accessibilità
- ♿ ARIA labels e semantic HTML
- ⌨️ Navigazione da tastiera completa
- 🔍 SEO ottimizzato
- 📖 Screen reader friendly

### Performance
- ⚡ Next.js Image optimization
- 🚄 Lazy loading componenti
- 📦 Code splitting automatico
- 💨 Turbopack build system

## 📁 Struttura del Progetto

```
mediten/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── restauro/             # Servizio Restauro
│   │   ├── riqualificazione/     # Servizio Riqualificazione
│   │   ├── edilizia/             # Servizio Edilizia
│   │   ├── turismo/              # Servizio Turismo
│   │   ├── idraulica/            # Servizio Idraulica
│   │   ├── energia/              # Servizio Energia
│   │   ├── consulting/           # Servizio Consulting
│   │   ├── progetti/             # Overview progetti
│   │   │   ├── martorana/        # Progetto dettaglio
│   │   │   ├── palazzo-zanca/    # Progetto dettaglio
│   │   │   ├── sant-ignazio-olivella/
│   │   │   ├── hotel-wagner/
│   │   │   └── ...
│   │   ├── contatti/             # Form contatti
│   │   └── policy/               # Policy e certificazioni
│   ├── components/
│   │   ├── ui/                   # Shadcn UI components
│   │   ├── nav-bar.tsx           # Navigation bar
│   │   ├── footer-section.tsx    # Footer
│   │   ├── feature-card.tsx      # Card immersive
│   │   ├── service-card.tsx      # Card servizi
│   │   ├── project-card.tsx      # Card progetti
│   │   └── animated-section.tsx  # Wrapper animazioni
│   └── lib/
│       └── utils.ts              # Utility functions
├── components.json               # Shadcn config
├── next.config.ts                # Next.js config
├── tailwind.config.ts            # Tailwind config
└── package.json
```

## 🛠️ Setup e Sviluppo

### Installazione

```bash
npm install
```

### Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## 📋 Convenzioni del Codice

### Naming
- **Componenti**: PascalCase (es. `NavBar`)
- **File**: kebab-case (es. `nav-bar.tsx`)
- **Directory**: kebab-case (es. `footer-section/`)
- **Variabili/Funzioni**: camelCase (es. `handleClick`)
- **Costanti**: UPPERCASE (es. `API_URL`)

### Stile
- Indentazione: **tabs**
- Stringhe: **single quotes**
- No semicolons
- Max 80 caratteri per linea

### Component Pattern
```tsx
'use client' // Solo se necessario

import { ... } from '...'

interface Props {
  // TypeScript interfaces
}

export function ComponentName({ props }: Props) {
  // Component logic
  return (...)
}
```

## 🎯 Pagine Implementate

### Pagine Principali
- ✅ Homepage con hero section animato
- ✅ Progetti (overview generale)
- ✅ Contatti con form
- ✅ Policy e certificazioni

### Servizi
- ✅ Restauro (3 progetti)
- ✅ Riqualificazione (2 progetti)
- ✅ Edilizia (1 progetto)
- ✅ Turismo (1 progetto)
- ✅ Idraulica (5 progetti)
- ✅ Energia (24 progetti)
- ✅ Consulting (8 committenti)

### Progetti Dettaglio
- ✅ Chiesa della Martorana
- ✅ Chiesa Sant'Ignazio all'Olivella
- ✅ Palazzo Zanca
- ✅ Hotel Wagner
- ✅ Centro del Marmo
- ✅ Palazzolo Acreide

## 🎨 Componenti Personalizzati

### FeatureCard
Card immersiva con immagine full-size e testo in
sovraimpressione. Include:
- Gradient overlay dinamico
- Zoom effetto all'hover
- CTA button animato
- Icona con animazione

### AnimatedSection
Wrapper per animazioni scroll-triggered con Framer Motion

### NavBar
Navigation bar sticky con:
- Dropdown menu servizi (desktop)
- Sheet menu mobile
- Animazioni smooth

### FooterSection
Footer completo con:
- Info aziendali
- Link organizzati per sezione
- Copyright

## 📦 Dipendenze Principali

```json
{
  "framer-motion": "^11.x",
  "lucide-react": "^0.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x",
  "class-variance-authority": "^0.x"
}
```

## 🔒 Certificazioni

- ISO 9001:2015 - Qualità
- ISO 14001 - Ambiente
- ISO 37001 - Anticorruzione
- ISO 45001 - Salute e Sicurezza
- PdR 125 - Parità di Genere

## 📞 Contatti

**Mediterranea Engineering S.r.l.**
- Via G. Alessi, 16 - 90143 Palermo
- Tel: 339 8562152
- Email: me@mediten.it
- P.IVA: 04502560826
- Albo unico regionale: n. 1771

---

© 2025 Mediterranea Engineering. Tutti i diritti riservati.
# mediten
