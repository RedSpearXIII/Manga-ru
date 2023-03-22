# Base image
FROM node

# Set working directory
WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build

EXPOSE 80

ENV VITE_REACT_APP_API_URL=http://anifox.club:12200/api/

# Start the application
CMD ["pnpm", "dev"]
