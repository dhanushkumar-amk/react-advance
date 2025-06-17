import React, { useEffect, useState } from 'react'

const User = () => {

    const [usersList, setUsersList] = useState([])

    async  function  fetchAllUsers(){
        try {
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json();
            if(data?.users){
                setUsersList(data?.users)
            }else{
                setUsersList([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, [])


  return (
    <div>
        <h1>All user List</h1>
        <ul>
            {
            usersList && usersList.length > 0 ?
            usersList.map((item, index) => (
                <li style={{listStyle : "none"}} key={index}>💗 name : {item.firstName} {item.lastName}</li>
            ))
       : <></>
        }
        </ul>
    </div>
  )
}

export default User
