import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AtButton, AtInput } from 'components/atoms'
import { UpdateFormSchema } from 'schemas'
import type { UpdateDataUser } from 'types/user'

interface MlUpdateFormProps {
  update: (data: UpdateDataUser) => void
  currentData?: UpdateDataUser
}

export const MlUpdateForm = ({ update, currentData }: MlUpdateFormProps) => {
  const formOptions = { resolver: yupResolver(UpdateFormSchema) }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateDataUser>(formOptions)

  const onSubmit: SubmitHandler<UpdateDataUser> = (data) => {
    update(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AtInput
        className="mb-4"
        placeholder="Name"
        {...register('name')}
        defaultValue={currentData?.name}
        error={errors.name?.message}
      />

      <AtInput
        className="mb-4"
        placeholder="Phone"
        {...register('phone')}
        defaultValue={currentData?.phone}
        error={errors.phone?.message}
      />

      <div className="text-center lg:text-left">
        <AtButton
          type="submit"
          className="w-full bg-pink-400 text-white hover:bg-pink-500 uppercase rounded shadow-md"
        >
          Update
        </AtButton>
      </div>
    </form>
  )
}
