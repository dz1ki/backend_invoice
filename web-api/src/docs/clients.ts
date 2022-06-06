export const swClients: object = {
  "/clients": {
    get: {
      summary: "Get all clients",
      tags: ["Clients"],

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
