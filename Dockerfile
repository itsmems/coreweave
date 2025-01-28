# Use an official Node.js image as the base image
FROM node:18-alpine


# Set the working directory in the container
WORKDIR /app


# Copy package.json and package-lock.json
COPY package.json package-lock.json ./


# Install dependencies
RUN yarn install


# Copy the rest of the application code
COPY . .


# Build the Next.js application
RUN yarn run build


# Set the environment variable for the port
ENV PORT=3002


# Expose port 3002 to the host
EXPOSE 3002


# Set the default command to start the Next.js app
CMD ["yarn", "run", "start"]