import slugify from '@sindresorhus/slugify'

export const createSlug = (str: string): string => slugify(str)
