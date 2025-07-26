# Inventory Management API Documentation

This document provides details on the available API endpoints for the Inventory Management System.

**Base URL**: `https://your-backend-url.onrender.com/api` *(Replace with your live Render URL)*

---

## Authentication

### 1. Register User

Creates a new user account.

* **Endpoint:** `/users/register`
* **Method:** `POST`
* **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
* **Response (Success 201):** Returns the new user's details and a JWT token.
    ```json
    {
      "_id": "60d5f3f7...",
      "username": "newuser",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
* **Response (Failure 400):**
    ```json
    {
      "message": "User already exists"
    }
    ```

### 2. Login User

Authenticates an existing user and returns a JWT token.

* **Endpoint:** `/users/login`
* **Method:** `POST`
* **Request Body:**
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
* **Response (Success 200):**
    ```json
    {
      "_id": "60d5f3f7...",
      "username": "testuser",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
* **Response (Failure 401):**
    ```json
    {
      "message": "Invalid username or password"
    }
    ```

---

## Products

**Authentication Required:** All product endpoints require a valid JWT to be sent in the `Authorization` header.

* **Format:** `Authorization: Bearer <your_jwt_token>`

### 1. Add a Product

Adds a new product to the inventory.

* **Endpoint:** `/products`
* **Method:** `POST`
* **Request Body:**
    ```json
    {
      "name": "string",
      "type": "string",
      "sku": "string (must be unique)",
      "description": "string",
      "quantity": "number",
      "price": "number",
      "image_url": "string (optional)"
    }
    ```
* **Response (Success 201):**
    ```json
    {
      "message": "Product added successfully",
      "productId": "60d5f4a0..."
    }
    ```
* **Response (Failure 400):**
    ```json
    {
      "message": "Error adding product",
      "error": "MongoServerError: E11000 duplicate key error..."
    }
    ```

### 2. Get All Products

Retrieves a paginated list of all products.

* **Endpoint:** `/products`
* **Method:** `GET`
* **Query Parameters (Optional):**
    * `pageNumber`: The page number to retrieve (e.g., `/products?pageNumber=2`). Defaults to 1.
* **Response (Success 200):**
    ```json
    {
      "products": [
        {
          "_id": "60d5f4a0...",
          "name": "iPhone 15",
          "type": "Electronics",
          "sku": "IPH-15",
          "description": "The latest iPhone.",
          "quantity": 50,
          "price": 1299.99,
          "image_url": "[https://example.com/iphone.jpg](https://example.com/iphone.jpg)"
        }
      ],
      "page": 1,
      "pages": 5
    }
    ```

### 3. Update Product Quantity

Updates the stock quantity of a specific product by its ID.

* **Endpoint:** `/products/:id/quantity`
* **Method:** `PUT`
* **URL Parameters:**
    * `id`: The unique ID of the product to update.
* **Request Body:**
    ```json
    {
      "quantity": "number"
    }
    ```
* **Response (Success 200):**
    ```json
    {
      "message": "Quantity updated successfully",
      "product": {
        "_id": "60d5f4a0...",
        "name": "iPhone 15",
        "quantity": 45,
        "...other product details"
      }
    }
    ```
* **Response (Failure 404):**
    ```json
    {
        "message": "Product not found"
    }
    ```