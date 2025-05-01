# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the frontend directory
COPY ./Frontend ./Frontend

# Set working directory to Frontend
WORKDIR /app/Frontend

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Clean up dependencies
RUN rm -rf node_modules

# Expose port 3000
EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "dist" ]