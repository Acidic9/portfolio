import React, { useState, useEffect } from 'react'

interface Props {
  className?: string
  placeholder?: string
  type?: string
  onChange?: (newValue: string) => void
}

const Input: React.FunctionComponent<Props> = ({
  className,
  placeholder,
  type,
  onChange,
}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onChange && onChange(value)
  }, [value])

  return (
    <input
      className={
        'bg-transparent border-b border-red-500 placeholder-gray-500 py-2 font-thin outline-none text-base tracking-wide ' +
        (className || '')
      }
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={ev => setValue((ev.target as HTMLInputElement).value)}
    />
  )
}

export default Input
