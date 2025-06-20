import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h3>Page does't exit</h3>
        <Link to={"/recipe-list"}>return recipe-list</Link>
    </div>
  )
}

export default NotFound
