# Node Js Video Streaming

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/): Ensure that Node.js, preferably version 16 or higher, is installed on your system, as this project utilizes the latest versions of TypeScript and Nodemon.
- [npm](https://www.npmjs.com/): npm is the package manager for Node.js and comes with the Node.js installation.

## Installation

Clone the repository to your local machine:

```
git clone https://github.com/Hriday-paul/node-video-stream.git
```

Navigate to the project directory:

```
cd node-video-stream/
```

Install the project dependencies including TypeScript and Nodemon:

```
npm i
```

## Usage

For development purposes, you can run the application using Nodemon to automatically restart the server when changes are detected. Execute the following command:

```
npm start
```

This will start the server at `http://localhost:3000` by default.

## Project Structure

The project structure is organized as follows:

- `index.js`: Configures and starts the Express application
- `public`: Here you can store any static public file
    - `index.html`: Its your website first view file
- `package.json`: Project configuration and dependencies
