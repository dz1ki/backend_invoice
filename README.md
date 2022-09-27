## Description

Test the invoice server application. A small service for generating invoices for payment  
sending invoices to customers by email.  
Implementation:

1. The platform for creating a service is Node.js.
2. Framework - Express.
3. ORM - Sequelize.
4. PostgreSQL as a database server.
5. Using microservice architecture based on queues to perform asynchronous tasks:  
   5.1 PDF document generation.  
   5.2 Sending email.
6. A queuing system built on top of Redis.
7. Documentation of Swagger.
8. Docker-compose is used to create images and organize work with Redis in PostgreSQL.

Workflow:

1. The client sends an HTTP request to the service, passing to the API:  
   1.1 email address, user.  
   1.2 The email address to which you wish to send the invoice  
   payment (if it is not specified, the letter is sent to user).  
   1.3 The content of the work performed, in the form of a list of work and cost for each item.
2. The service registers the incoming request by creating an entry in the database.
3. The service receives additional information for generating an invoice from the database, using email as a search key:  
   3.1 Information about the client (name, surname).  
   3.2 Information about the company in which the recipient of the invoices works.
4. The service generates a PDF document based on the template. PDF includes:  
   4.1 Customer information.  
   4.2 Information about the customer's company.  
   4.3 Total amount payable.  
   4.4 List of work performed and their cost.  
   4.5 Account number.  
   4.6 Date of issue of the invoice.  
   4.7 Information about the sender (name, address, etc.).
5. The service sends the PDF document via email as an attachment.

## Running the app

```bash
# In the shared folder, create a local.json file following the example of the local.json.dist file,
# and fill it with the necessary data.

# In the console, run the build and launch images with the command:
$ docker-compose up

# Wait until the server starts.

# Create tables in the database using the "migrations" command:
$ docker-compose exec web-api npm run migrate:run

# Fill in the tables with the data "seeders" with the command:
$ docker-compose exec web-api npm run seed:run
```

## Test

Documentation (Swagger UI) is available at: [link] http://localhost:3000/api-docs/
