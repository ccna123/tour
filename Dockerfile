# Stage 1: Build the React app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /react

# Copy and install only the production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the application source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: NGINX to serve the React app
FROM nginx:stable-alpine

# Create a non-root user and group
RUN addgroup -S reactgroup && adduser -S reactuser -G reactgroup

# Copy the built React app from the build stage
COPY --from=build /react/build /usr/share/nginx/html

# Copy custom NGINX config file
COPY nginx.conf /etc/nginx/nginx.conf

# Change ownership of nginx directories to non-root user
RUN chown -R reactuser:reactgroup /usr/share/nginx/html \
    && chown -R reactuser:reactgroup /var/cache/nginx \
    && chown -R reactuser:reactgroup /var/log/nginx \
    && chown -R reactuser:reactgroup /etc/nginx/conf.d

# Create necessary directories and set permissions
RUN mkdir -p /var/run/nginx /var/tmp/nginx \
    && chown -R reactuser:reactgroup /var/run/nginx \
    && chown -R reactuser:reactgroup /var/tmp/nginx

# Expose port 8080 instead of 80 (to avoid root privileges)
EXPOSE 80

# Run NGINX as a non-root user
USER reactuser

# Command to start NGINX with a custom PID path
CMD ["nginx", "-g", "daemon off; pid /var/tmp/nginx/nginx.pid;"]
