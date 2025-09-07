# # ✅ Run with Docker
# # Build the image:
# docker-compose build
# # Start container:
# docker-compose up

# Use official Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy source code
# COPY src ./src
COPY public ./public
COPY views ./views

# Build TypeScript
RUN npm run build

# --------------------------
# Production Image
# --------------------------
FROM node:18-alpine

WORKDIR /app

# Copy only needed files from builder
COPY package*.json ./
RUN npm install --only=production

# Copy built files & assets
COPY --from=builder /app/dist ./dist
COPY public ./public
COPY views ./views

EXPOSE 3000

CMD ["node", "dist/index.js"]
