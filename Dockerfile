# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
# 1. First copy ONLY package files
COPY package*.json ./
# 2. Clean install with cache cleanup
RUN npm cache clean --force && \
    npm ci --no-audit
# Copy remaining files
COPY . .
RUN npm run build

# Production stage (using Node.js instead of Nginx)
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --omit=dev

EXPOSE 3000
# Add explicit host/port flags:
CMD ["sh", "-c", "npx vite preview --host 0.0.0.0 --port 3000 --cors --strict-port false"]