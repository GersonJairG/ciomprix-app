import Image from 'next/image'

interface MlCardProps {
  img: string
  name: string
  position: string
  functions: string
  user: string
}

export const MlCard = ({
  img,
  name,
  position,
  functions,
  user,
}: MlCardProps) => {
  return (
    <div className="w-80 md:w-64 xl:w-80 flex flex-col justify-center items-center mx-auto">
      <div className="w-80 md:w-64 xl:w-80 h-44 relative mb-4">
        <Image sizes="" src={img} fill alt="Profile" className="object-cover" />
      </div>

      <div className="flex flex-col text-start divide-y">
        <div className="my-2 space-y-2">
          <p className="font-semibold text-neutral-600">{name}</p>
          <p className="space-x-1 text-neutral-500 text-sm font-medium">
            <span className="font-bold">{position}</span>
            <span>{functions}</span>
          </p>
        </div>
        <p className="pt-3 text-neutral-500 text-sm font-bold">{user}</p>
      </div>
    </div>
  )
}
