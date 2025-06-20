import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicRoutes = () => {

    const params = useParams();

  return (
    <div>
        <h1>Recipe Details Page :  {params.id} </h1>
    </div>
  )
}

export default DynamicRoutes
