import React from 'react'
import Input from './Input'
import TextArea from './TextArea'

export default () => (
  <div className="w-full max-w-sm text-center">
    <h4 className="text-2xl md:text-3xl mb-2">Get in Touch</h4>
    <p className="text-gray-400 text-sm md:text-base mb-5 md:mb-10">
      Whether your big project idea is an e-commerce store, complex app, or new
      software - get in touch and we can discuss it further.
    </p>
    <form>
      <Input className="w-full mb-4" placeholder="Name" type="text" />
      <Input className="w-full mb-4" placeholder="Email" type="email" />
      <TextArea className="w-full" placeholder="Message" />
    </form>
  </div>
)
