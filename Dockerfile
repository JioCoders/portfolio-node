# --------------------------
# Build Stage
# --------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file (if any)
COPY package*.json tsconfig.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy all project files
COPY . .

# Build TypeScript → dist/
RUN npm run build

# --------------------------
# Production Stage
# --------------------------
FROM node:18-alpine

WORKDIR /app

# Copy only package.json & install prod deps
COPY package*.json ./
RUN npm install --only=production

# Copy build output and assets from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/views ./views

# Expose port (Railway sets PORT env variable)
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
