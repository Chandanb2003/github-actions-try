# Use official Node image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
