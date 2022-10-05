import React from 'react'
import Card from '../components/shared/Card'
import {Link} from "react-router-dom"

function About() {
  return (
    <Card>
      <h2>About</h2>
      <Link to="/">back to home page</Link>
    </Card>
  )
}

export default About