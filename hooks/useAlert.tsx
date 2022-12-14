import {
  selectShowAlert,
  renderErrorAlert,
  renderWarningAlert,
  renderInfoAlert,
  renderSuccessAlert,
  dismountAlert,
  selectMsgAlert,
  selectTypeAlert,
} from '@/slices/alertSlice'
import { useDispatch, useSelector } from 'react-redux'

function useAlert() {
  const showAlert = useSelector(selectShowAlert)
  const msgAlert = useSelector(selectMsgAlert)
  const typeAlert = useSelector(selectTypeAlert)

  const dispatch = useDispatch()

  async function showErrorAlert(msg: string) {
    dispatch(renderErrorAlert(msg))
  }

  async function showWarningAlert(msg: string) {
    dispatch(renderWarningAlert(msg))
  }

  async function showInfoAlert(msg: string) {
    dispatch(renderInfoAlert(msg))
  }

  async function showSuccessAlert(msg: string) {
    dispatch(renderSuccessAlert(msg))
  }

  async function hiddenAlert() {
    dispatch(dismountAlert())
  }

  return {
    showAlert,
    msgAlert,
    typeAlert,
    showErrorAlert,
    showWarningAlert,
    showInfoAlert,
    showSuccessAlert,
    hiddenAlert,
  }
}

export default useAlert
