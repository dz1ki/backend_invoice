export const swCompanies: object = {
  "/companies": {
    get: {
      summary: "Get all company",
      tags: ["Companies"],

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
