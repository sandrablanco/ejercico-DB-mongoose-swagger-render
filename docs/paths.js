//ejemplo de post create task
module.exports = {
  paths: {

    "/create": {
      post: {
        tags: ["Tasks"],
        summary: "Create a new task",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    example: "New task",
                  },
                },
                required: ["title"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
  },

//GET
"/": {
      get: {
        tags: ["Tasks"],
        summary: "Get all tasks",
        responses: {
          200: {
            description: "List of tasks",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
// GET BY ID
 "/id/{_id}": {
      put: {
        tags: ["Tasks"],
        summary: "Update task title",
        description: "Updates only the title of a task",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Task id",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    example: "Updated task title",
                  },
                },
                required: ["title"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Task updated successfully",
          },
          400: {
            description: "Title is required",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
// DELETE
      delete: {
        tags: ["Tasks"],
        summary: "Delete a task",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Task id",
          },
        ],
        responses: {
          200: {
            description: "Task deleted successfully",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
  };
