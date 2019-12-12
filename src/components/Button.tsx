import React, { useState, useEffect } from 'react'

interface Props {
  className?: string
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  onClick?: () => void
}

const Input: React.FunctionComponent<Props> = ({
  className,
  type,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      className={
        'bg-transparent placeholder-gray-500 py-2 font-thin outline-none text-base tracking-wide transition-color transition-500 ' +
        (className || '') +
        (disabled === true
          ? ' text-gray-500 cursor-default opacity-25'
          : ' hover:underline')
      }
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Input
