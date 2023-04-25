
## Description

Concevoir un réseau social à l'aide du framework NestJS.

## Installation

1. Installer les dépendences

```bash
$ npm install
```

2. Créer le fichier .env

```ENV
DATABASE_URL="mysql://username:password@host:port/database"
```

3. Instancier la base de données

4. Effectuer la première migration

```bash
$ npx prisma migrate dev
```

5. Démarrer l'application

```bash
$ npm run start
```

6. Ouvrire la documentation

`http://localhost:3005/api`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
