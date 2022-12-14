import { NewUser } from '@/types/user'

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
    console.log('Error in services: ', error)
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
    console.log('Error in services: ', error)
  }
}
