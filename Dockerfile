# Start your image with a node base image
FROM node:18-alpine

# The /app directory will act as the main application directory
WORKDIR /app

# Copy the frontend directory
COPY ./Frontend ./Frontend

# Set the working directory to Frontend
WORKDIR /app/Frontend

# Install the node dependencies
RUN npm install

# Build the app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# remove all the node_module that may have been left
RUN rm -rf node_modules

# Expose port 3000
EXPOSE 3000

# Start the app using the serve command
CMD [ "serve", "-s", "dist" ]