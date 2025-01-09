FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy files to app directory
COPY package.json .
COPY tsconfig.json .
COPY index.d.ts .
COPY src ./src/
COPY .env .
# Install app dependencies
RUN npm install

# Build the TypeScript code
RUN npx tsc

# Specify the command to run the app
CMD ["node", "build/index.js"]

# Expose the port the app runs on
EXPOSE 3003
