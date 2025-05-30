
## Author

Erick Engelhardt

# TypeScript Adapter Pattern

This project demonstrates the use of a payment service with two different adapters: one for a legacy payment system and another for Stripe. It uses TypeScript for static typing and Jest for testing.

This repository is the example code for the article [TypeScript Adapter Pattern](https://dev.to/erickengelhardt/demystifying-the-adapter-pattern-eoa).

## Project Structure

- `src/`: Contains the project source code.
  - `services/`: Contains the payment service.
  - `adapters/`: Contains adapters for different payment providers.
  - `vendor/`: Contains payment SDK simulations.
- `__tests__/`: Contains tests for the project.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
   cd typescript-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Available Scripts

- `npm run build`: Compiles the TypeScript project to JavaScript.
- `npm start`: Starts the project in development mode with automatic reloading.
- `npm test`: Runs tests using Jest.

## How to Run

To start the project in development mode, use:

```bash
npm start
```

This will run the `index.ts` file and simulate payments using the configured adapters.

## How to Run Tests

To run the tests, use:

```bash
npm test
```

This will run all tests defined in the project using Jest.

## License

This project is private and does not have a public license.
