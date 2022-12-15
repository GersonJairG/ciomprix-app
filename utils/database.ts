import { Client, ClientBase, ClientConfig } from 'pg'

const credentials: ClientConfig = {
  user: process.env.PGUSER || '',
  host: process.env.PGHOST || '',
  database: process.env.PGDATABASE || '',
  password: process.env.PGPASSWORD || '',
  port: Number(process.env.PGPORT),
}

let conn: ClientBase | undefined

if (!conn) {
  const client = new Client(credentials)
  client.connect()
  conn = client
}

export { conn }
