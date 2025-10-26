
export const packageJsonBoilerplate = (name:string) => {
  const lines = [
    `{`,
    `\t"name": "${name}",`,
    `\t"version": "1.0.0",`,
    `\t"main": "app.js",`,
    `\t"scripts": {`,
    `\t\t"dev": "ts-node-dev --respawn --transpile-only src/app.ts",`,
    `\t\t"build": "tsc"`,
    `\t},`,
    `\t"keywords": [],`,
    `\t"author": "",`,
    `\t"license": "ISC",`,
    `\t"description": "",`,
    `\t"dependencies": {`,
    `\t\t"dotenv": "latest",`,
    `\t\t"jsonwebtoken": "latest",`,
    `\t\t"bcrypt": "latest",`,
    `\t\t"cookie-parser": "latest",`,
    `\t\t"moment": "latest",`,
    `\t\t"uuid": "latest",`,
    `\t\t"cors": "latest",`,
    `\t\t"morgan": "latest",`,
    `\t\t"express": "latest",`,
    `\t\t"mongoose": "latest"`,
    `\t},`,
    `\t"devDependencies": {`,
    `\t\t"@types/node": "latest",`,
    `\t\t"@types/cors": "latest",`,
    `\t\t"@types/express": "latest",`,
    `\t\t"@types/bcrypt": "latest",`,
    `\t\t"@types/cookie-parser": "latest",`,
    `\t\t"@types/jsonwebtoken": "latest",`,
    `\t\t"@types/morgan": "latest",`,
    `\t\t"ts-node-dev": "latest",`,
    `\t\t"typescript": "latest"`,
    `\t}`,
    `}`
  ]
  return lines.join("\n")
}

