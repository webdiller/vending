import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Button = (props: Props) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md">{props.children}</button>
  )
}