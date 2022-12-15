import type { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '@/utils/database'
import { toNewUser, toUpdateUser } from '@/utils/checks'
import { ResponseType } from '@/types/user'
import { encrypt } from '@/utils/bcryptjs'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { method, body } = req

  // ListUsers
  switch (method) {
    case 'GET':
      try {
        const query = 'SELECT id, email, phone, name FROM users;'
        const response = await conn?.query(query)

        return res.status(200).json({
          message: `Success.`,
          data: response?.rows,
        })
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }

    // CreateUser
    case 'POST':
      try {
        const newUser = toNewUser(body)
        const { name, phone, email, password } = newUser
        const passwordHash = await encrypt(password)

        const query =
          'INSERT INTO users (name, phone, email, password) VALUES ($1, $2, $3, $4) RETURNING *;'
        const values = [name, phone, email, passwordHash]

        const response = await conn?.query(query, values)

        return res.status(200).json({
          message: `The user ${email} has been created successfully.`,
          data: response?.rows[0],
        })
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }

    // UpdateUser
    case 'PUT':
      try {
        const updatedUser = toUpdateUser(body)
        const { name, phone, email } = updatedUser

        const userExistQuery = 'SELECT * FROM users WHERE email = $1 LIMIT 1;'
        const userExist = await conn?.query(userExistQuery, [email])

        if (!userExist?.rowCount) {
          return res.status(404).json({ message: 'Not Found User.' })
        }

        const query = 'UPDATE users SET name = $1, phone = $2 WHERE email = $3 RETURNING *;'
        const values = [name, phone, email]

        const response = await conn?.query(query, values)

        return res.status(200).json({
          message: `The user ${email} has been updated successfully.`,
          data: response?.rows[0],
        })
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    default:
      return res.status(400).json({ message: 'Invalid method' })
  }
}
