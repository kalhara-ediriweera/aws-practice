const express = require('express');
const app = express();
app.use(express.json());

app.use('/products', require('./routes'));

app.get('/health', (req, res) => {
  res.json({ status: 'product-service OK' });
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`product-service running on ${port}`));
