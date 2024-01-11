# React Shopping List

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

The "group-fs-react-shopping-list" project is a Full Stack React application that allows users to manage their shopping lists. It includes a React front end, an Express server, and uses PostgreSQL for data storage.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RyanOlson86/group-fs-react-shopping-list
cd group-fs-react-shopping-list
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up your PostgreSQL database and update the connection details in the server configuration.
For instructions to setup PostgreSQL: [Click Here!](database.sql)

### Running the Application

Use the following commands to start the application:

```bash
# Start the development server
npm run start

# Run client only (Vite)
npm run client

# Run server only
npm run server

```

## Scripts

- **start:** Starts both the server and the Vite development server.
- **client:** Runs the Vite development server for the client.
- **server:** Runs the server using nodemon for automatic restarts.


## Dependencies

- axios: ^1.6.5
- express: ^4.17.1
- pg: ^8.5.1
- react: ^18.2.0
- react-dom: ^18.2.0

## Dev Dependencies

- @vitejs/plugin-react: ^4.2.1
- nodemon: ^2.0.22
- vite: ^5.0.10
- vitest: ^1.1.0
