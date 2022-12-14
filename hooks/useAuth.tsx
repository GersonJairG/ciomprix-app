import { useSelector, useDispatch } from 'react-redux'
import { setUser, logOut, selectUser } from '@/slices/authSlice'

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

  return { user, logIn, logOut }
}

export default useAuth
