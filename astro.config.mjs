// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import starlight from '@astrojs/starlight'
import rehypeMermaid from 'rehype-mermaid'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid', 'math']
    },
    rehypePlugins: [rehypeMermaid]
  },

  integrations: [
    starlight({
      title: 'DOCS',

      logo: {
        src: './src/assets/logo.svg'
      },

      customCss: ['./src/styles/docs.css'],

      disable404Route: true,
      defaultLocale: 'fr',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/action-21/action-21'
        },
        {
          icon: 'openCollective',
          label: 'OpenCollective',
          href: 'https://opencollective.com/action-21'
        },
        {
          icon: 'seti:db',
          label: 'data.gouv.fr',
          href: 'https://www.data.gouv.fr/fr/organizations/renolab/'
        }
      ],

      sidebar: [
        {
          label: "👋 Découvrir l'association",
          items: [
            {
              label: 'Présentation',
              link: '/docs/association'
            },
            {
              label: 'Fonctionnement',
              link: '/docs/association/fonctionnement'
            },
            {
              label: 'Budget',
              link: '/docs/association/budget'
            }
          ]
        },
        {
          label: '🚀 Contribuer',
          items: [
            {
              label: 'Avant de commencer',
              link: '/docs/contribuer'
            },
            {
              label: 'Programmes',
              link: '/docs/contribuer/programmes'
            },
            {
              label: 'Actions',
              link: '/docs/contribuer/actions'
            },
            {
              label: 'Ressources',
              link: '/docs/contribuer/ressources'
            },
            {
              label: 'Boite à outils',
              link: '/docs/contribuer/outils'
            }
          ]
        },
        {
          label: '❤️ Nous soutenir',
          items: [
            {
              label: 'Comment nous soutenir ?',
              link: '/docs/nous-soutenir'
            }
          ]
        }
      ]
    })
  ]
})
