import { ReactNode } from 'react'

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <p className='bg-red-600 p-2 text-sm uppercase text-white font-bold text-center'>{children}</p>
  )
}
