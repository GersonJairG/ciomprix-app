import { NewUser, UserPublic, CredentialsUser } from 'types/user'

const isString = (string: string): boolean => typeof string === 'string'

const parseName = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing name.')
  }
  return commentFromRequest
}

export const parseEmail = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing email.')
  }
  return commentFromRequest
}

const parsePhone = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing phone.')
  }
  return commentFromRequest
}

const parsePassword = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing password.')
  }
  return commentFromRequest
}

export const toNewUser = (object: any): NewUser => {
  const newEntry: NewUser = {
    name: parseName(object.name),
    email: parseEmail(object.email),
    phone: parsePhone(object.phone),
    password: parsePassword(object.password),
  }

  return newEntry
}

export const toValidUser = (object: any): CredentialsUser => {
  const validUser: CredentialsUser = {
    email: parseEmail(object.email),
    password: parsePassword(object.password),
  }
  return validUser
}

export const toUpdateUser = (object: any): UserPublic => {
  const updateUser: UserPublic = {
    name: parseName(object.name),
    phone: parsePhone(object.phone),
    email: parseEmail(object.email),
  }

  return updateUser
}
