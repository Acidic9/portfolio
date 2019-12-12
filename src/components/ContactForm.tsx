import React, { useState, useCallback, useEffect } from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'

import validEmail from '../utils/validEmail'
import emailjs from 'emailjs-com'

import CheckMark from '../images/check-mark.svg'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [formValid, setFormValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    emailjs.init('user_OiTGI7KQceJE4nhmu9sy5')
  }, [])

  useEffect(() => {
    if (name.length <= 1) {
      setFormValid(false)
      return
    }

    if (!validEmail(email)) {
      setFormValid(false)
      return
    }

    if (message.length < 5) {
      setFormValid(false)
      return
    }

    setFormValid(true)
    return
  }, [name, email, message])

  const handleSubmit = useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault()

      if (!formValid) {
        return false
      }

      // Submit
      setIsLoading(true)
      emailjs
        .send(
          'gmail',
          'template_xrOqLy9Z',
          {
            from_name: name,
            to_name: 'Ari',
            message_html: message,
          },
          'user_OiTGI7KQceJE4nhmu9sy5'
        )
        .then(value => {
          setIsLoading(false)

          if (value.status === 200) {
            setShowSuccess(true)
          } else {
            alert('Something went wrong when sending message.')
          }
        })
        .catch(() => {
          setIsLoading(false)
        })

      return false
    },
    [name, email, message, formValid]
  )

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')

    setFormValid(false)
    setIsLoading(false)
    setShowSuccess(false)
  }

  if (showSuccess) {
    return (
      <div className="w-full max-w-sm text-center">
        <div className="flex mb-4 items-center">
          <img className="w-6 mr-4" src={CheckMark} />
          <span>Message successfully sent!</span>
        </div>
        <button
          className="text-sm text-gray-200 opacity-50 hover:opacity-100"
          onClick={resetForm}
        >
          Click here to send another message
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm text-center">
      <h4 className="text-2xl md:text-3xl mb-2">Get in Touch</h4>
      <p className="text-gray-400 text-sm md:text-base mb-5 md:mb-10">
        Whether your big project idea is an e-commerce store, complex app, or
        new software - get in touch and we can discuss it further.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          className="w-full mb-4"
          placeholder="Name"
          type="text"
          onChange={value => setName(value)}
        />
        <Input
          className="w-full mb-4"
          placeholder="Email"
          type="email"
          onChange={value => setEmail(value)}
        />
        <TextArea
          className="w-full mb-4"
          placeholder="Message"
          onChange={value => setMessage(value)}
        />
        <Button
          className="w-full"
          disabled={!formValid || isLoading}
          type="submit"
        >
          Send Message
        </Button>
      </form>
    </div>
  )
}
