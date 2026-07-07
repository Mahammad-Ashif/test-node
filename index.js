const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, This is your Node.js server running with Express! V1');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
