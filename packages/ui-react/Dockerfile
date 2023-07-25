# syntax=docker/dockerfile:1

# build
FROM node:22-alpine AS build

RUN corepack enable

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

COPY --chown=node:node .npmrc package.json pnpm-lock.yaml ./
COPY packages/ui-react/package.json ./packages/ui-react/

RUN pnpm fetch

COPY packages/ui-react ./packages/ui-react

WORKDIR /app/packages/ui-react
RUN pnpm install --frozen-lockfile --offline
ENV NODE_ENV=production
RUN pnpm run storybook:build

# serve
FROM caddy:2-alpine AS serve

WORKDIR /srv

COPY --from=build /app/packages/ui-react/storybook-static/ /srv/

EXPOSE 3000

CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":3000"]
