export default {
    name: 'origins',
    title: 'Origins',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Origin Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true }
      }
    ]
  }
  