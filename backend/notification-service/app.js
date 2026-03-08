const express = require('express');
const app = express();
app.use(express.json());

app.use('/notifications', require('./routes'));

app.get('/health', (req, res) => {
  res.json({ status: 'notification-service OK' });
});

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`notification-service running on ${port}`));
