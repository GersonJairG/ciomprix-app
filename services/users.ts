import { NewUser, UpdateUser, ValidUser } from 'types/user'

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
    return { message: 'Unexpected error.' }
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

    return await response.json()
  } catch (error) {
    console.log('Error in services:: createUser :: ', error)
    return { message: 'Unexpected error.' }
  }
}

export async function updateUser(updatedUser: UpdateUser) {
  try {
    const response = await fetch('/api/users/', {
      body: JSON.stringify(updatedUser),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })

    return await response.json()
  } catch (error) {
    console.log('Error in services:: createUser :: ', error)
    return { message: 'Unexpected error.' }
  }
}

export const validateUser = async (validUser: ValidUser) => {
  try {
    const response = await fetch('/api/users/sign_in', {
      body: JSON.stringify(validUser),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    return await response.json()
  } catch (error) {
    console.log('Error in services:: validateUser :: ', error)
    return { message: 'Unexpected error.' }
  }
}

export const checkEmail = async (email: string) => {
  try {
    const response = await fetch('/api/users/check_email', {
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await response.json()
  } catch (error) {
    console.log('Error in services:: checkEmail :: ', error)
    return { message: 'Unexpected error.' }
  }
}
