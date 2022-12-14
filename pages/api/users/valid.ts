import type { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '@/utils/database'
import { ResponseType } from '@/types/user'
import { toValidUser } from '@/utils/checks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { method, body } = req

  switch (method) {
    case 'POST':
      try {
        const validUser = toValidUser(body)
        const { email, password } = validUser

        const query = 'SELECT * FROM users WHERE email = $1 AND password = $2 LIMIT 1;'
        const values = [email, password]

        const response = await conn?.query(query, values)

        const data = response?.rows[0]

        if (!data) {
          return res.status(404).json({ message: 'Not Found User.' })
        }
        return res.status(200).json({ message: 'Success', data })

      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    default:
      return res.status(400).json({ message: 'Invalid method' })
  }
}
