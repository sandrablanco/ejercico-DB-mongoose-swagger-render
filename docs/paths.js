module.exports = {
    paths: {
        '/create': {
            post: {
                tags: {
                    Task: 'Create Task',
                },
                description: 'Create a new task',
                operationId: 'createTask',
                params: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Task',
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: 'Task created successfully',
                    500: {
                        description: 'Internal server error',
                    },
                },
            },
        },
    },
}
};   