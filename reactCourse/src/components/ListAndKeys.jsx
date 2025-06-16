import React from 'react'

const data = [
    "product 1",
    "product 2",
    "product 3",
    "product 4",
];

const ListandKeys = () => {
  return (
    <div>
        <ul>
            {data.map((item, index) =>
                <li key={index}>{item}</li>
        )}
        </ul>
    </div>
  )
}

export default ListandKeys
