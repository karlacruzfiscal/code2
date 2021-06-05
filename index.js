const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const port = 3333
const app = express()

app.use(cors());
app.use(bodyParser.json());

app.post('/export', (req, res) => {
  const url = 'https://cosette-challenge.myshopify.com/admin/api/2021-04/products.json';
  const method = 'POST';
  const headers = {
    'Authorization': 'Basic MmM0MDJlNjRmZWNlNjVhZjRmYzI4MjcyODkwNzI5YWM6c2hwcGFfMDQxYmEwNjM4MTNjZDJkZjE1NjU5OGIyZmMyZjZjODA=',
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify({
    "product": {
      "title": req.body.name,
      "body_html": req.body.description,
      "vendor": req.body.brand,
      "images": req.body.images.map((src) => {
        return { src }

      }),
      "variants": [
        {
          "inventory_management": "shopify",
          "inventory_quantity": req.body.qty,
          "price": req.body.price,
          "sku": req.body.sku
        }
      ]
    }
  });

  const options = { method, headers, body }
  fetch(url, options).then((r) => {
  })
  res.send('Product inserted')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

