# Welcome to React Router on Cloudflare Workers with D1!

A modern, production-ready template for building full-stack React applications using React Router, hosted on Cloudflare Workers with D1 as the database.

You can quickly create a new React Router application from this template by running:
```
npx create-react-router@latest --template matthewlynch/react-router-cloudflare-d1
```

Some of the code in this repo was adapted from the [React Router Cloudflare D1 template](https://github.com/remix-run/react-router-templates/tree/main/cloudflare-d1).

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🟧️ Setup to deploy to Cloudflare Workers
- 📊 Cloudflare D1 database for production and SQLite database for local development 
- 📟 [`cloudflareDevProxy`](https://github.com/remix-run/remix/blob/main/packages/remix-dev/vite/cloudflare-proxy-plugin.ts) to make Cloudflare bindings work locally
- 📖 [React Router docs](https://reactrouter.com/)
- 📖 [Cloudflare Workers docs](https://developers.cloudflare.com/workers/)
- 📖 [D1 database docs](https://developers.cloudflare.com/d1/)

## Getting Started

1) Run `cp .dev-example.vars .dev.vars` to create an .env file you can use to override variables defined in `wrangler.toml` or set secret values you don't want to check into source control
2) Create a database by running [`wrangler d1 create`](https://developers.cloudflare.com/d1/wrangler-commands/#d1-create) and update `wranlger.toml` with the UUID and name for the database
3) Run `pnpm typegen` any time you make changes to `wranlger.toml` to ensure types from bindings and module rules are up to date for type safety

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Run an initial database migration:

```bash
pnpm run db:migrate
```

Start the development server with HMR:

```bash
pnpm run dev
```

Your application will be available at [`http://localhost:5173`](http://localhost:5173).

### Database

You can develop against a local SQLite database then push changes to your remote D1 database.

#### Workflow

1) Make changes to the schema in `./database/schema.ts`
2) Run `db:generate` to generate SQL migration files
3) Run `db:migrate` to apply the generated migration files to your local SQLite database. 
4) Run `db:migrate:production` to apply the changes to your remote D1 database.

#### Viewing data (via Drizzle Studio)

Run `db:studio` to browse data in your local database on disk or `db:studio:production` to browse your remote D1 database.

## Building for Production

Create a production build:

```bash
pnpm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To deploy directly to production from your machine:

```sh
npx wrangler deploy
```

To deploy a preview URL:

```sh
npx wrangler versions preview
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ by [Matt](https://mattlynch.dev)
