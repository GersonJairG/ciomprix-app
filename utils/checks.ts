import { NewUser, UpdateUser, ValidUser } from '@/types/user'

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

export const toValidUser = (object: any): ValidUser => {
  const validUser: ValidUser = {
    email: parseEmail(object.email),
    password: parsePassword(object.password),
  }
  return validUser
}

export const toUpdateUser = (object: any): UpdateUser => {
  const updateUser: UpdateUser = {
    name: parseName(object.name),
    phone: parsePhone(object.phone),
    email: parseEmail(object.email),
  }

  return updateUser
}
