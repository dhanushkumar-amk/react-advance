import React from 'react'
import fetchData from '../hooks/useFetchHook'

const UseFecthHook = () => {

    const { data, loading, error } = fetchData('https://dummyjson.com/recipes');

    if(loading)
        return <h1>Fetching data...</h1>
    return (
    <div>
        <h1>Recipe List</h1>
        <ul>
            {
                data?.recipes?.length > 0 ?
                data?.recipes.map((item) => <div>
                    <img  width={50} height={50} src={item.image}/>
                    <label>{item.name}</label>
                </div>)
                : null
            }
        </ul>

    </div>
  )
}

export default UseFecthHook
