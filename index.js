const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/index');

const { dbConnection } = require('./config/config');
const routes = require('./routes');
app.use(express.json());

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));


const startServer = async () => {
  await dbConnection();
  app.listen(PORT, () =>
    console.log(`Server started on port ${PORT}`)
  );
};

startServer(); //evita que se intenten consultas sin conexión