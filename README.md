## Description

Test backend application "Invoice". A service for generating and sending invoices for payment by e-mail to customers.
You can copy the code by following the link: https://gitlab.com/dz1ki/invoices/-/tree/main

## Running the app

```bash
# In the shared folder, create a local.json file following the example of the local.json.dist file, and fill it with the necessary data.

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
