const express = require('express');
const app = express();
app.use(express.json());

// route mounting
app.use('/users', require('./routes'));

app.get('/health', (req, res) => {
  res.json({ status: 'user-service OK' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`user-service running on ${port}`));
