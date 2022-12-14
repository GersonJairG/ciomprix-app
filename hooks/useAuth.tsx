import { useSelector, useDispatch } from 'react-redux'
import { setUser, logOut as logout, selectUser } from '@/slices/authSlice'

import { UserPublic } from '@/types/user'

function useAuth() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  async function logIn(user: UserPublic) {
    dispatch(setUser(user))
  }

  async function logOut() {
    dispatch(logout())
  }

  return { user, logIn, logOut }
}

export default useAuth
