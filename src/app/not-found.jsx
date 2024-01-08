import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry the page you're looking for wasn't found try to return home page</p>
      <Link href="/">Home Page</Link>        
    </div>
  )
}

export default NotFound