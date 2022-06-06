export const swLogs: object = {
  "/logs": {
    get: {
      summary: "Get all log",
      tags: ["Logs"],

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
