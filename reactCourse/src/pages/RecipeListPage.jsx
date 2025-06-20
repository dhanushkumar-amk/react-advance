import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipeListPage = () => {
    const location = useLocation();
    console.log(location.pathname);
  return (
    <div>
        <h1>RecipeListPage</h1>
    </div>
  )
}

export default RecipeListPage
