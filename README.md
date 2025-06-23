# Action 21 - Site

Site web d'Action 21 sous [Astro](https://astro.build/).

## Plan du site

```text
Accueil
├── Programmes
├── Actions
├── Docs
├── Blog

```

## 🚀 Structure du projet

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   └── actions/
│   │   └── blog/
│   │   └── docs/
│   │   └── partial/
│   │   └── programmes/
│   ├── data/
│   │   └── auteurs/
│   │   └── categories/
│   │   └── contributeurs/
│   │   └── membres/
│   │   └── sujets/
│   ├── helpers/
│   │   └── [helper].ts
│   ├── layouts/
│   │   └── [layout].astro
│   └── pages/
│       └── index.astro
│       └── 404.astro
│       └── mentions-legales.astro
│       └── actions
│           └── index.astro
│           └── [...slug]/
│               └── index.astro
│       └── programmes
│           └── index.astro
│           └── [...slug]/
│               └── index.astro
│           └── [sujet]/
│               └── index.astro
│   ├── styles/
│   │   └── docs.css
│   │   └── global.css
│   ├── content.config.ts
└── LICENCE
└── README.md
└── astro.config.mjs
└── package.json
└── astro.tsconfig.json
└── tsup.tsconfig.ts
```

## 🧞 Commandes

| Command             | Action                                  |
| :------------------ | :-------------------------------------- |
| `npm install`       | Installation des dependences            |
| `npm run dev`       | Lance un serveur local `localhost:4321` |
| `npm run build`     | Compilation dans le dossier `./dist/`   |
| `npm run preview`   | Préproduction avant déploiement         |
| `npm run astro ...` | Astro CLI : `astro add`, `astro check`  |

## Nom de domaine

Domaine hébergé sur LWS.

## Déploiement continue


