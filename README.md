# Recipes App

## Introduction
Develop a complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose. The application should follow the MVC pattern and include comprehensive API documentation using Postman.

---

## Technologies Used
### Backend
- Node.js
- Express.js
- MongoDB

### Tools
- **Postman**: Used for testing REST APIs.
- **HTTPS Methods**: GET, POST, PUT, DELETE.

---

## Setup Instructions
### Prerequisites
- Install **Node.js** 
- Install **MongoDB** and ensure the MongoDB service is running.
- Install **Postman** for API testing.

---

## HTTP Methods and CRUD Operations
### CRUD Operations
| Operation      | HTTP Method | Description              | URL                                                   |
|----------------|-------------|--------------------------|-------------------------------------------------------|
| **Create**     | `POST`      | Adds new data            | `http://localhost:3000/recipes/createRecipe`          |
| **Read All**   | `GET`       | Fetches existing data    | `http://localhost:3000/recipes/`                      |
| **Read by ID** | `GET`       | Fetches data by ID       | `http://localhost:3000/recipes/:orderId`              |
| **Update**     | `PUT`       | Updates existing data    | `http://localhost:3000/recipes/updateRecipe/:recipeId`|
| **Delete**     | `DELETE`    | Removes existing data    | `http://localhost:3000/recipes/deleteRecipe/:recipeId`|

---

## Using Postman for API Testing
Postman is a tool to test RESTful APIs easily. Follow these steps:

1. Open Postman and create a new request.
2. Select the HTTP method (GET, POST, PUT, DELETE).
3. Add the API endpoint (e.g., `http://localhost:3000/recipes`).
4. For `POST` or `PUT` requests, go to the **Body** tab:
   - Select **raw** and choose **JSON**.
   - Enter the data, e.g.:
     ```json
     {
       "name": "Chocolate Cake",
       "ingredients": ["flour", "sugar", "cocoa"],
       "description": "Mix and bake."
     }
     ```

### Example Requests
#### GET All Recipes
- **Method**: GET  
- **Endpoint**: `/recipes`

#### Create a Recipe
- **Method**: POST  
- **Endpoint**: `/recipes/createRecipe`  
- **Body**:
  ```json
  {
    "name": "Pancakes",
    "ingredients": ["flour", "milk", "eggs"],
    "description": "Mix ingredients and cook on a griddle."
  }
  ```

#### Update a Recipe
- **Method**: PUT  
- **Endpoint**: `/recipes/updateRecipe/:recipeId`  
- **Body**:
  ```json
  {
    "name": "Updated Pancakes",
    "ingredients": ["flour", "milk", "eggs", "butter"],
   "description": "Mix ingredients and cook on a griddle."
  }
  ```

#### Delete a Recipe
- **Method**: DELETE  
- **Endpoint**: `/recipes/deleteRecipe/:recipeId`
