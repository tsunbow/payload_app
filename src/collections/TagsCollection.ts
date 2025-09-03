import type { CollectionConfig } from 'payload'

const SLUG = 'tags'

export const TagsCollection = {
  slug: SLUG,
  labels: {
    singular: 'Tag',
    plural: 'Tag',
  },
  access: {},
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      label: '名前',
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      label: 'slug',
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
} as const satisfies CollectionConfig
