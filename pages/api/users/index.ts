import type { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '@/utils/database'
import { toNewUser } from '@/utils/checks'
import { ResponseType } from '@/types/user'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const query = 'SELECT * FROM users;'
        const response = await conn?.query(query)

        return res.status(200).json({
          message: `Success.`,
          data: response?.rows,
        })

        return
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }

    case 'POST':
      try {
        const newUser = toNewUser(body)
        const { name, phone, email, password } = newUser

        const query =
          'INSERT INTO users (name, phone, email, password) VALUES ($1, $2, $3, $4) RETURNING *;'
        const values = [name, phone, email, password]

        const response = await conn?.query(query, values)

        return res.status(200).json({
          message: `The user ${email} has been created successfully.`,
          data: response?.rows[0],
        })
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    default:
      return res.status(400).json({ message: 'Invalid method' })
  }
}
