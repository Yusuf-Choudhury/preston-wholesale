const fs = require('fs');
const csv = require('csv-parser');
const { createClient } = require('@sanity/client');

// Configure the client (You need to get the TOKEN from Sanity Manage)
const client = createClient({
  projectId: 'YOUR_PROJECT_ID', // Found in sanity.cli.ts
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'YOUR_SECRET_TOKEN', // Generate this in https://sanity.io/manage
  useCdn: false,
});

const results = [];

// Name of your CSV file (must be in the same folder)
fs.createReadStream('products.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
    console.log(`Processing ${results.length} products...`);

    for (const row of results) {
      // Map CSV to Sanity
      const product = {
        _type: 'product',
        name: row.Name,       // CSV Header: Name
        sku: row.SKU,         // CSV Header: SKU
        pricePerCase: parseFloat(row.Price),
        stockLevel: parseInt(row.Stock),
        packSize: row.Size
      };

      // Check if product exists
      const query = `*[_type == "product" && sku == "${product.sku}"][0]`;
      const existing = await client.fetch(query);

      if (existing) {
        // Update Stock Only
        await client.patch(existing._id).set({ stockLevel: product.stockLevel }).commit();
        console.log(`Updated Stock: ${product.name}`);
      } else {
        // Create New
        await client.create(product);
        console.log(`Created New: ${product.name}`);
      }
    }
  });
