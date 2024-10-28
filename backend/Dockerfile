FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git

# Copy package files
COPY package*.json ./

# Copy application code
COPY . .

# Install dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Build Code
RUN npm run build

# Set environment variables
ENV NODE_ENV=production

# Expose default Node.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]