import {defineType, defineField} from 'sanity'
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'tools',
      title: 'Tools / Frameworks Used',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
    },
  ],
}
