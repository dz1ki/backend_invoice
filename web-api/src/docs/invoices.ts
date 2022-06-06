export const swInvoices: object = {
  "/generateInvoice": {
    post: {
      summary: "Generate invoice info",
      tags: ["Invoice"],

      parameters: [
        {
          in: "query",
          name: "sendEmail",
          required: false,
          schema: {
            type: "string",
          },
          description:
            "You can specify the mail to send the invoice. By default, the invoice will be sent to clients via email.",
          allowReserved: true,
        },
      ],

      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "Clients email",
                  example: "pete78@examples.com",
                },
                completedTasks: {
                  type: "array",
                  description: "List of completed tasks",
                  example: [
                    { taskName: "Repairing Car", cost: 27 },
                    { taskName: "Cleaning Car", cost: 15 },
                  ],
                },
              },
            },
          },
        },

        required: true,
      },

      responses: {
        "200": {
          description: "Success",
        },
        "500": {
          description: "Server error",
        },
      },
    },
  },
};
