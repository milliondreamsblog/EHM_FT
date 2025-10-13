import React from 'react'
import Hero from '../Components/Contact/Hero'
import Contact from '../Components/Contact/Contact'
import Map from '../Components/Contact/Map'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
          <Hero/>
          <div id="form"><Contact/></div>
    </div>
  )
}

export default ContactPage