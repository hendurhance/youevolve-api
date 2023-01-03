# YouEvolve API
This project is a REST API built with Typescript, Node, Express, Mongoose and JWT. It is a comprehensive API that allows users to perform CRUD operations on categories and products.

### Installation
Clone the repository: git clone ```https://github.com/hendurhance/youevolve-api.git```
Install dependencies: ``npm install``
Set up a MongoDB database and add the connection string to the .env file
Start the server: ```npm run dev```

### Endpoints

#### User Routes

| Method | Endpoint       | Description                                                  |
| ------ | -------------- | ------------------------------------------------------------ |
| POST   | `/api/users`  | Creates a new user with the provided username and password. |
| POST   | `/api/sessions` | Logs in a user with the provided username and password.    |
| GET    | `/api/sessions` | Returns the currently logged in user.                      |
| DELETE | `/api/sessions` | Logs out the currently logged in user.                     |

#### Category Routes

| Method | Endpoint                        | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| POST   | `/api/categories`              | Creates a new category with the provided title.              |
| PUT    | `/api/categories/:categoryId` | Updates the category with the provided title.               |
| GET    | `/api/categories`              | Returns all categories.                                     |
| GET    | `/api/categories/:categoryId` | Returns the category with the specified categoryId.         |
| DELETE | `/api/categories/:categoryId` | Deletes the category with the specified categoryId.         |
| GET    | `/api/categories/:categoryId/products` | Returns all products in the specified category. |

#### Product Routes

| Method | Endpoint                      | Description                                                  |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| POST   | `/api/products`              | Creates a new product with the provided title and categoryId. |
| GET    | `/api/products`              | Returns all products.                                        |
| PUT    | `/api/products/:productId` | Updates the product with the provided title and categoryId.  |
| GET    | `/api/products/:productId` | Returns the product with the specified productId.            |
| DELETE | `/api/products/:productId` | Deletes the product with the specified productId.            |


