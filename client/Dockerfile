# Base image
FROM node:16-alpine
# Make folder to put our files in
RUN mkdir -p /app/client
# Set working directory so that all
# subsequent command runs in this folder
WORKDIR /app/client
# Copy package json and install dependencies
COPY package*.json /app/client/
# Install dependencies
RUN npm install
# Copy our app
COPY . ./app/client
# Expose port to access server
EXPOSE 3000
# Command to run our app
CMD [ "npm", "start" ]