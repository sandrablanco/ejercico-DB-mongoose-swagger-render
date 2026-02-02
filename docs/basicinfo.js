module.exports = {
    openapi: '3.0.3',
    info: {
        version: '1.0.0',
        title: 'Task API',
        description: 'API for managing tasks',

    },
    servers: [ 
        {
          url: "http://localhost:8080",
            description: "Local server",
        },
        ],
};