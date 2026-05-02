# Star Wars - The Factions of the Force

Website showcasing the factions of Star Wars: The Empire and The Rebellion.

<img width="856" height="637" alt="image" src="https://github.com/user-attachments/assets/05baa06e-b2bd-41ea-a2c9-1d396066c9d2" />

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- next-intl (i18n)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Languages

The site automatically detects the browser language:
- Spanish (es)
- English (en)

Fallback: English.

## Structure

```
src/app/
├── page.tsx        # Main page
├── layout.tsx      # Root layout
└── globals.css    # Design tokens

messages/
├── en.json        # English
└── es.json        # Spanish
```
