# inventory-backend/Dockerfile

# --- Build Stage ---
# Use a Node.js image to build the app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# --- Production Stage ---
# Use a smaller, more secure Node.js image for the final image
FROM node:18-alpine

WORKDIR /app

# Copy dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy application code from the builder stage
COPY --from=builder /app .

# Expose the port the app will run on
EXPOSE 8080

# The command to start the application
CMD [ "node", "server.js" ]