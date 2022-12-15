import { useSelector, useDispatch } from 'react-redux'

import { setUser, logOut as logout, selectUser, selectLoading, changeLoading } from 'slices/authSlice'
import { UserPublic } from 'types/user'

function useAuth() {
  const user = useSelector(selectUser)
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()

  async function setInfoUser(user: UserPublic) {
    dispatch(setUser(user))
  }

  async function logOut() {
    dispatch(logout())
  }

  async function setLoading(state: boolean){
    dispatch(changeLoading(state))
  }

  return { user, setInfoUser, logOut, loading, setLoading }
}

export default useAuth
