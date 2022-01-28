# server/Dockerfile-dev

# Install node image in container
FROM node:16-alpine

# Install nodemon for hot reloading
# RUN npm install -g nodemon

# Create and set the working directory
# RUN mkdir -p /api/build
WORKDIR /api

# Copy the dependency files over
COPY package.json /api

# Install dependencies
RUN npm install

# Copy the server files over
COPY . /api


EXPOSE 5000

# Command to run them
CMD [ "npm", "start"]