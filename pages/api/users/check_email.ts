import type { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '@/utils/database'
import { ResponseType } from '@/types/user'
import { parseEmail } from '@/utils/checks'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const email = parseEmail(body.email)

        const userExistQuery = 'SELECT * FROM users WHERE email = $1 LIMIT 1;'
        const userExist = await conn?.query(userExistQuery, [email])

        if (!userExist?.rowCount) {
          return res.status(200).json({ message: 'Email valid.', data: true })
        }
        return res.status(404).json({ message: 'Email is already in use.' })
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    default:
      return res.status(400).json({ message: 'Invalid method' })
  }
}
