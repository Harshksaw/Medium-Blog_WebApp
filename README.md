# Blog App Backend

This is the backend for the Blog App. It's built with Node.js and Express and uses Prisma with a PostgreSQL database.

## Project Structure

## Routes

### Blog Routes

- `GET /blog`: Fetch all blog posts.
- `GET /blog/:id`: Fetch a single blog post by its `id`.
- `POST /blog`: Create a new blog post. Requires a JSON body with `title` and `content`.
- `PUT /blog/:id`: Update a blog post by its `id`. Requires a JSON body with the fields to be updated.
- `DELETE /blog/:id`: Delete a blog post by its `id`.

### User Routes

- `GET /user`: Fetch all users.
- `GET /user/:id`: Fetch a single user by their `id`.
- `POST /user`: Create a new user. Requires a JSON body with `username` and `password`.
- `PUT /user/:id`: Update a user by their `id`. Requires a JSON body with the fields to be updated.
- `DELETE /user/:id`: Delete a user by their `id`.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your PostgreSQL database and add the connection string to a `.env` file in the root of the project.
4. Run `npm start` to start the server.

## Testing

Run `npm test` to run the test suite.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
