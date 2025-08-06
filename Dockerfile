# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files first
# Wildcard for optional lockfile
COPY package.json package-lock.json* ./  

# Install dependencies (flexible approach)
RUN if [ -f package-lock.json ]; then \
      npm ci --no-audit; \
    else \
      npm install --no-audit; \
    fi

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80