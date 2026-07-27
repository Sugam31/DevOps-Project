const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello from DevOps Project!');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
