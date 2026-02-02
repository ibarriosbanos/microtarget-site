# Microtarget Website

## Website v2

### Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

### Where to update copy

- Home page sections: `app/page.tsx` and section components in `components/`
  - Hero: `components/VideoHero.tsx`
  - Use cases: `components/UseCaseGrid.tsx`
  - Data domains + geography: `components/DataDomains.tsx`, `components/GeographyDiagram.tsx`
  - Access methods: `components/AccessMethods.tsx`
  - Trust and methods: `components/TrustMethods.tsx`
  - Contact form: `components/ContactForm.tsx`
- Data Hub page copy: `app/data-hub/page.tsx` and `components/DataHubClient.tsx`
- Contact page copy: `app/contact/page.tsx`

### Data Hub catalogue JSON

- Location: `content/data-hub/catalogue.json`
- Schema fields:
  - `dataset_id`, `name`, `category`, `description`, `best_for`, `geographies`, `inside`,
    `access`, `formats`, `coverage`, `sample`

### Demo video replacement

- Replace the placeholder demo at `public/demo.mp4`
- The hero video component lives in `components/VideoHero.tsx`

