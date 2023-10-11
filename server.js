const express = require('express');
const app = express();
const port = 3001; 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
