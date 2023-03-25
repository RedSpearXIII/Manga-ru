# Base image
FROM node:18.13.0-alpine

# Set working directory
WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build

ENV VITE_REACT_APP_API_URL=http://anifox.club:12200/api/

FROM nginx:1.23.3-alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start the application
CMD ["nginx", "-g", "daemon off;"]
