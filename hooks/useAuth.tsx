import { useSelector, useDispatch } from 'react-redux'
import { setUser, logOut as logout, selectUser } from '@/slices/authSlice'

import { ValidUser } from '@/types/user'
import { validateUser } from '@/services/users'

function useAuth() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  async function logIn(data: ValidUser) {
    const userInfo = await validateUser(data)
    if (!userInfo) {
      console.log('Email or password are incorrect.')
      return
    }
    dispatch(setUser(userInfo))
  }

  async function logOut() {
    dispatch(logout())
  }

  return { user, logIn, logOut }
}

export default useAuth
