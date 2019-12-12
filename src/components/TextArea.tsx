import React, { useState, useEffect } from 'react'

interface Props {
  className?: string
  ref?: React.MutableRefObject<HTMLTextAreaElement | undefined>
  placeholder?: string
  onChange?: (newValue: string) => void
}

const Input: React.FunctionComponent<Props> = ({
  className,
  ref,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onChange && onChange(value)
  }, [value])

  return (
    <textarea
      className={
        'bg-transparent border-b border-red-500 placeholder-gray-500 py-2 font-thin outline-none text-base tracking-wide min-h-65px max-h-161px ' +
        (className || '')
      }
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={ev => setValue((ev.target as HTMLTextAreaElement).value)}
    ></textarea>
  )
}

export default Input
