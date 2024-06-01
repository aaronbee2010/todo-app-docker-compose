# Todo App
Here's a demonstration of a todo app, with each of its components (React client, Express REST API and PostgreSQL database) incorporated into and executed from a dedicated container. 

This app allows you to create a todo, then mark it as complete. Not much more to it really!.

It mainly serves as a showcase of how it's possible to create containers for each component and run those containers in one command, then have those containers communicate with each other via a network implicitly created by Docker Compose.

All you need to do is run ```docker compose up -d``` within this directory, then you can access the frontend from ```localhost:8081```, the backend from ```localhost:3001``` and the database from ```localhost:5433``` on your machine.
