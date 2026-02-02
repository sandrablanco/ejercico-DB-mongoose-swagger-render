module.exports = {
    components: {
        schemas: {
            Tasks: {
                type: 'string',
                properties: {
                    _id: {
                        type: 'string',
                        description: 'Unique identifier for the task',
                        example: '60d0fe4f5311236168a109ca',
                    },
                    title: {
                        type: 'string',
                        description: 'Title of the task',
                        example: 'Complete the project documentation',
                    },
                    completed: {
                        type: 'boolean',
                        description: 'Status of the task',
                        example: false,
                    },    
                }
            }
        }
    }
}        