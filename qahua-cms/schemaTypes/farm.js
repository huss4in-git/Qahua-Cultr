export default {
    name: 'farm',
    title: 'Farm',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Farm Name',
        type: 'string',
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
  