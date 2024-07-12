# TypeScript Projekt aufsetzen

1. `npm init`
2. `npm i -D typescript ts-node nodemon`
3. `npm install body-parser cors dotenv express http-status-codes mysql2 sequelize`
4. `tsconfig.json` anlegen:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

5. über `npm i -D @types/<package-name>`können die Typdeklarationen für die jeweiligen Pakete installiert werden
6. .js in .ts ändern
