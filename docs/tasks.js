module.exports = {
    components:{
        schemas:{
. . .
            _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6201064b0028de7866e2b2c4"
            },
        }
    }

//PUT 
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
                example: "New task title",
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
        description: "Server error",
      },
    },
  },
},