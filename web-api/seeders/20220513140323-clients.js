"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Clients", [
      {
        firstName: "Johni",
        lastName: "Doel",
        email: "doel123@examples.com",
        company_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Oliver",
        lastName: "Williams",
        email: "will24@examples.com",
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Gabriel",
        lastName: "Peters",
        email: "pete78@examples.com",
        company_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Oleg",
        lastName: "Gibson",
        email: "oleg23@examples.com",
        company_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Derek",
        lastName: "Jordan",
        email: "der@examples.com",
        company_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Christian",
        lastName: "Collins",
        email: "coll89@examples.com",
        company_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Iris",
        lastName: "Grant",
        email: "grant28@examples.com",
        company_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Ariel",
        lastName: "Davis",
        email: "davi89@examples.com",
        company_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Olga",
        lastName: "Sol",
        email: "sol89@examples.com",
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Valery",
        lastName: "Joi",
        email: "valery65@examples.com",
        company_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Wendy",
        lastName: "Doel",
        email: "wendy45@examples.com",
        company_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {});
  },
};
