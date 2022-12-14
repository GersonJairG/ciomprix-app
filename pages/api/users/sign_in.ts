import type { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '@/utils/database'
import { ResponseType } from '@/types/user'
import { toValidUser } from '@/utils/checks'
import { compare } from 'bcryptjs'

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

        const userExistQuery = 'SELECT * FROM users WHERE email = $1 LIMIT 1;'
        const userExist = await conn?.query(userExistQuery, [email])

        if (!userExist?.rowCount) {
          return res.status(404).json({ message: 'Not Found User.' })
        }

        const user = userExist.rows[0]
        const checkPassword = await compare(password, user.password)

        if (!checkPassword) {
          return res
            .status(404)
            .json({ message: 'The password does not match.' })
        }
        return res.status(200).json({ message: 'Success', data: user })
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    default:
      return res.status(400).json({ message: 'Invalid method' })
  }
}
