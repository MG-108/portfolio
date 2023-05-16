export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {title: 'Title', name: 'title', type: 'localeString'},
    {
      title: 'Description',
      name: 'description',
      type: 'localeString',
    },
    {
      title: 'ImgUrl',
      name: 'imgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
