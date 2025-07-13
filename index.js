const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('👋 Hello from Chandan\'s Docker app!');
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
