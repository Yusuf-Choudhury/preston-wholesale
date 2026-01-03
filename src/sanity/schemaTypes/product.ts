import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Inventory Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'sku',
      title: 'SKU / Barcode',
      type: 'string',
    }),
    defineField({
      name: 'pricePerCase',
      title: 'Price Per Case (£)',
      type: 'number',
    }),
    defineField({
      name: 'stockLevel',
      title: 'Cases in Stock',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'packSize',
      title: 'Pack Size (e.g. 24 x 330ml)',
      type: 'string',
    }),
    defineField({
        name: 'dateAdded',
        title: 'Date Added',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
    }),
  ],
})
