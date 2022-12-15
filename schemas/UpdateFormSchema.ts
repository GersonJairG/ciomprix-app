import * as Yup from 'yup'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const UpdateFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .length(10, 'Password must be 10 characters')
    .matches(phoneRegExp, 'Phone number is not valid'),
})
