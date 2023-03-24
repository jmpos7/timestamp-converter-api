# Timestamp Microservice

This is a simple web application that takes a date input and returns the corresponding Unix timestamp and UTC date string. This project was completed as part of the [`freeCodeCamp curriculum`](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice).

## Getting Started

To use this application, simply enter a date in the input field and click the "Get Timestamp" button. The output will be displayed below the input field.

## How it Works

The Timestamp Microservice is built using Node.js and the Express framework. When the user enters a date and clicks the "Get Timestamp" button, the application sends a GET request to the server with the date parameter as a query string. The server parses the date and returns a JSON object with the Unix timestamp and UTC date string.

## Dependencies

This project uses the following dependencies:

- express: ^4.17.1
- cors: ^2.8.5

## Project Demo

The demo of the project can be used [here](https://boilerplate-project-timestamp.jmpos7.repl.co).


## License

This project is licensed under the MIT License.