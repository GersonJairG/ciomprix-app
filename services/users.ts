import { NewUser, UserPublic, ValidUser } from '@/types/user'

export async function getUsers() {
  try {
    const response = await fetch('/api/users/', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response) return
    return response.json()
  } catch (error) {
    console.log('Error in services:: getUsers :: ', error)
  }
}

export async function createUser(newUser: NewUser) {
  try {
    const response = await fetch('/api/users/', {
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    if (!response) return
    return response.json()
  } catch (error) {
    console.log('Error in services:: createUser :: ', error)
  }
}

export async function validateUser(validUser: ValidUser) {
  try {
    const response = await fetch('/api/users/valid', {
      body: JSON.stringify(validUser),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const { data, message } = await response.json()
    if (!data) {
      console.log('Manejar errores :: ', message)
      return
    }
    return data
  } catch (error) {
    console.log('Error in services:: validateUser :: ', error)
  }
}
