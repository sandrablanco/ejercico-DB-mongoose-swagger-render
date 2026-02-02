const { version } = require("mongoose");
const { serve } = require("swagger-ui-express");

module.exports = {
    openapi: '3.0.3',
    info: {
        version: '1.0.0',
        title: 'Task API',
        description: 'API for managing tasks',

    },
    servers: [
        ports: 'http://localhost:8080',
        ],
}