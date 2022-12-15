interface AtLoaderProps {
  show?: boolean
}

export const AtLoader = ({ show }: AtLoaderProps) => {
  return (
    <>
      {show && (
        <div className="absolute h-screen w-screen bg-black bg-opacity-60 z-50">
          <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-pink-500 border-8 h-44 w-44 md:h-52 md:w-52" />
          </div>
        </div>
      )}
    </>
  )
}
