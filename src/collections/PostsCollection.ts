import { validateURL, validatePositiveInteger } from '@/validators/fieldValidators'
import type { CollectionConfig } from 'payload'

const SLUG = 'posts'

export const PostsCollection = {
  slug: SLUG,
  labels: {
    singular: 'Post',
    plural: 'Post',
  },
  access: {},
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      label: 'タイトル',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'URL',
      name: 'url',
      type: 'text',
      required: true,
      validate: validateURL,
    },
    {
      label: '整数',
      name: 'integer',
      type: 'number',
      required: true,
      validate: validatePositiveInteger,
    },
  ],
} as const satisfies CollectionConfig
