const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

const mountServer = async () => {
  app.get('/', (req, res) => {
    res.status(200).json('test route added');
  });

  app.listen(port, () => console.log(`[server]: listening on port ${port}`));
};

mountServer();
