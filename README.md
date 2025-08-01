# Inventory_management
# MERN Stack Inventory Management System

This project is a complete inventory management system built with the MERN stack (MongoDB, Express.js, React, Node.js). It features a backend API for handling data and a responsive frontend for user interaction.

**Live Frontend URL:** [https://inventory-management-git-main-arpit-rais-projects-f03cd83e.vercel.app](https://inventory-management-git-main-arpit-rais-projects-f03cd83e.vercel.app)

**Live Backend URL:** [https://inventory-api-fio4.onrender.com](https://inventory-api-fio4.onrender.com)

---

## Features

-   User registration and JWT-based authentication.
-   Full CRUD (Create, Read, Update, Delete) functionality for products.
-   A responsive frontend built with React and styled with Tailwind CSS.
-   Separate, scalable backend API.

---

## Project Structure

This repository contains two main folders:

-   **/inventory-backend:** The Node.js & Express.js backend API.
-   **/inventory-frontend:** The React & Vite frontend application.

---

## Local Setup Instructions

To run this project on your local machine, you need to set up both the backend and the frontend separately.

### Backend Setup

1.  **Navigate to the backend folder:**
    ```bash
    cd inventory-backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the `inventory-backend` folder and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=a_strong_secret_key
    PORT=8080
    ```
4.  **Start the backend server:**
    ```bash
    npm start
    ```

### Frontend Setup

1.  **Open a new terminal** and navigate to the frontend folder:
    ```bash
    cd inventory-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env.local` file** in the `inventory-frontend` folder and add the following to connect to your local backend:
    ```env
    VITE_API_BASE_URL=http://localhost:8080/api
    ```
4.  **Start the frontend development server:**
    ```bash
    npm run dev
 ---

## API Documentation

For detailed information about the available endpoints, please see the [API Documentation](./inventory-backend/API_DOCS.md).

---

## API Testing (Postman)

A complete Postman collection with all the API requests is available in the backend directory. You can import this file into Postman to easily test all endpoints.

* **File Location:** [`./inventory-backend/Inventory Management.postman_collection.json`](./inventory-backend/Inventory%20Management.postman_collection.json)   ```

---

## Project Approach & AI Assistance

My primary focus for this project was architecting and building the backend. I developed the entire RESTful API from scratch using **Node.js and Express**, designing the database schemas with **Mongoose**, and implementing secure, **JWT-based** user authentication to protect the endpoints.

For the user interface, I leveraged a generative AI to accelerate the development of the **React** frontend. The AI was tasked with generating the necessary components, styling them with **Tailwind CSS**, and connecting them to the backend API I had built. The AI was also used as a tool for generating documentation templates.

## Running with Docker (Recommended)

The entire application can be built and run with a single command using Docker Compose.

**1. Prerequisites:**
   Ensure you have **Docker Desktop** installed and running on your computer.

**2. Start the Application:**
   From the main project root directory (the one containing `docker-compose.yml`), run the following command:
   ```bash
   docker-compose up --build

3. Accessing the Application:

Frontend URL: http://localhost:5173

Backend API URL: http://localhost:8080

4. Stop the Application:
To stop all running containers, press Ctrl + C in the terminal, or rundocker-compose down