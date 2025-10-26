/***
 * Generates the content for a `.env` file dynamically.
 * @param port - The port number your application will run on. Default is 8080.
 * @param db - The name of your MongoDB database. Default is "tsnode".
 * @returns A formatted .env file content as a string.
*/

import { randomBytes } from "crypto"

export const envBoilerplate = (db: string = 'tsnode', port: number = 8080): string => {
  
  const lines: string[] = [
    'NODE_ENV = dev',
    `PORT = ${port}`,
    'MONGO_URL = mongodb://localhost:27017',
    `DB = ${db}`,
    `JWT_SECRET = ${randomBytes(32).toString('base64')}`,
    `CLIENT = *`,
    `DOMAIN = localhost`,
  ]
  
  return lines.join('\n')
}