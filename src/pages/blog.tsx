import React from 'react'
import '../styles/styles.css'

import Navbar from '../components/Navbar'

interface Props {
  exit: any
}

const Blog: React.FunctionComponent<Props> = ({ exit }) => {
  console.log(exit)
  return (
    <div className="font-roboto">
      <Navbar
        visible={true}
        activeNav={0}
        scrollbarWidth={0}
        onClick={() => {}}
      />

      <div className="pt-8"></div>
    </div>
  )
}

export default Blog
