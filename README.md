# DKB Coding Challenge

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Devcontainer Setup

The devcontainer setup will enable you to have the exact development environment with matching node and pnpm version running in a seperate docker container, speeding up the project setup and reducing the risks of development enviornment errors due to mismatching versions.

1. Install [VSCode](https://code.visualstudio.com/download) as IDE
1. Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) VSCode extension
1. Install [docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/install/)
1. Open VSCode in this folder and use the `Dev Containers: Rebuild and Reopen folder` action (more information to setup und running devcontainers on the [extensions website](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers))

## Manual Setup

Install [pnpm](https://pnpm.io/installation).

Install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Testing

Run the unit tests:

```bash
pnpm test
```