# Stage 1: Build the Vite app
FROM node:20-alpine AS builder
WORKDIR /app
# Secure, reproducible install
RUN npm ci --no-audit                   
COPY package*.json ./
# Creates /dist folder
COPY . .
RUN npm run build                       

# Stage 2: NGINX Server
FROM nginx:alpine
# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html  
# Apply our config
COPY nginx.conf /etc/nginx/conf.d/default.conf      
# Fix permissions
RUN chown -R nginx:nginx /usr/share/nginx/html      
# Standard HTTP port
EXPOSE 80                                          