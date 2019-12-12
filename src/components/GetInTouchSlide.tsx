import React from 'react'
import AboutMe from './AboutMe'
import ContactForm from './ContactForm'

export default () => {
  return (
    <div className="h-screen bg-gray-950 pt-24">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full text-white px-8">
        {/* Me */}
        <div className="mb-6 md:mb-8 lg:mb-0 mx-auto lg:mr-24">
          <AboutMe />
        </div>

        {/* Contact form */}
        <div className="mx-auto lg:ml-24">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
