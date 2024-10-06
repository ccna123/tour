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
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Change ownership of nginx html directory to non-root user
RUN chown -R reactuser:reactgroup /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run NGINX as a non-root user
USER reactuser

# Command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
