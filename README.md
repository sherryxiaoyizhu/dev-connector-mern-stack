# DevConnector

DevConnector is a social network application with Node.js, Express, React, Redux and MongoDB.

## Stack

[MERN Stack](https://www.mongodb.com/mern-stack) - stands for MongoDB, Express, React, Node.

- MongoDB - document database
- Express(.js) - Node.js web framework
- React(.js) - a client-side JavaScript framework
- Node(.js) - the premier JavaScript web server

## Environment & Setup

- Edit in [settings.json](https://code.visualstudio.com/docs/getstarted/settings#:~:text=You%20can%20open%20the%20settings,to%20using%20the%20default%20values.).

- Install [Node.js](https://nodejs.org/en/) - the npm file should be in `/usr/local/bin/npm`.

- Install the required dependencies:

  ```
  npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
  npm i -D nodemon concurrently
  ```

- Run nodemon: `npm run server`.

- [Download Postman](https://www.postman.com/downloads/) and then connect it to your PC with the Postman desktop client before you can send requests on your local host `http://localhost:5001`.

- To check if a user has been registered, go to [MongoDB](https://www.mongodb.com/): `Atlas -> Browse Collections`.

- To kill a process: Run `ps aux | grep npm` to get the process ID, then do `kill -9 [PID]`.

- [Create an OAuth App on GitHub](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

## Functionalities

### Users

#### Authentication

- Register users with name, valid email and password
  - [JWT](https://jwt.io/) - decodes, verifies and generates JSON Web Token ([JWT GitHub Repo](https://github.com/auth0/node-jsonwebtoken)).

#### Authorization

- Only users that own the post will be able to delete the post, or delete comment of the post

### Profile

- Create and update user profile
- Get current user profile
- Get all profiles & profile by user ID
- Delete profile & user
- Add and delete experience & education from user profile
- Get GitHub repos for profile

### Post

- Add and delete post
- Get all posts & post by ID
- Like or unlike a post

## Technology

### Platform

- [Virtual Studio](https://visualstudio.microsoft.com/) - an integrated development environment from Microsoft.

### Front-end

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - a high-level, interpreted programming language.

### Middleware

- [express-validator](https://express-validator.github.io/docs/) - a set of express.js middlewares that wraps validator.js validator and sanitizer functions.

### Back-end

- [Node.js](https://nodejs.org/en/) - JavaScript run-time environment that executes JavaScript code server-side.

- [Postman](https://www.postman.com/) - an API platform for developers to design, build, test and iterate their APIs.

- [MongoDB](https://www.mongodb.com/) - a source-available cross-platform document-oriented database program, classified as a NoSQL database program, and uses JSON-like documents with optional schemas.

- [Mongoose](https://mongoosejs.com/) - an elegant mongodb object modeling for Node.js.

## Source

- [Basic writing and formatting syntax on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

- [Remove .DS_Store from a Git Repository](https://stackoverflow.com/questions/107701/how-can-i-remove-ds-store-files-from-a-git-repository)

- This project is inspired by [MERN Stack Front To Back: Full Stack React, Redux & Node.js](https://github.com/bradtraversy/devconnector_2.0) on Udemy by Brad Traversy.
