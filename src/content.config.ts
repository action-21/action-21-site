import { defineCollection, reference, z } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'

const liens = z.array(
  z.object({
    icon: z.string(),
    label: z.string(),
    href: z.string().url()
  })
)

const auteurs = defineCollection({
  loader: file('./src/data/auteurs/db.json'),
  schema: z.object({ nom: z.string(), liens })
})

const membres = defineCollection({
  loader: file('./src/data/membres/db.json'),
  schema: z.object({
    slug: z.string(),
    nom: z.string(),
    description: z.string(),
    avatar: z.string().url(),
    liens
  })
})

const contributeurs = defineCollection({
  loader: file('./src/data/contributeurs/db.json'),
  schema: z.object({
    slug: z.string(),
    nom: z.string(),
    description: z.string(),
    avatar: z.string().url(),
    site: z.string().url()
  })
})

const sujets = defineCollection({
  loader: file('./src/data/sujets/db.json'),
  schema: z.object({
    slug: z.string(),
    titre: z.string()
  })
})

const programmes = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/programmes' }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      titre: z.string(),
      description: z.string(),
      image: image(),
      publie: z.boolean(),
      epingle: z.optional(z.boolean()),
      sujets: z.array(reference('sujets')),
      membres: z.array(reference('membres'))
    })
})

const actions = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/actions' }),
  schema: z.object({
    slug: z.string(),
    titre: z.string(),
    description: z.string(),
    etat: z.enum(['investigation', 'construction', 'acceleration', 'archive']),
    publie: z.boolean(),
    epingle: z.optional(z.boolean()),
    tags: z.array(z.string()),
    programmes: z.array(reference('programmes')),
    actions: z.optional(z.array(reference('actions'))),
    contributeurs: z.array(reference('contributeurs')),
    liens
  })
})

const categories = defineCollection({
  loader: file('./src/data/categories/db.json'),
  schema: z.object({
    slug: z.string(),
    titre: z.string()
  })
})

const articles = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/blog' }),
  schema: z.object({
    slug: z.string(),
    titre: z.string(),
    description: z.string(),
    date_publication: z.date(),
    date_maj: z.date(),
    publie: z.boolean(),
    epingle: z.optional(z.boolean()),
    categories: z.array(reference('categories')),
    auteurs: z.array(reference('auteurs')),
    tags: z.array(z.string())
  })
})

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema()
})

export const collections = {
  auteurs,
  articles,
  membres,
  contributeurs,
  sujets,
  programmes,
  actions,
  categories,
  docs
}
