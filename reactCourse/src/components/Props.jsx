import ProductItem from "./Helper/ProductItem"

// props are object so we desctructure it
const Props = ({name, age, gendre, data}) => {
  return (
    <div>
        <h4>Name : {name}</h4>
        <h4>Age : {age}</h4>
        <h4>Gendre : {gendre}</h4>
        <hr/>

     <div>
        <ul>
            {data.map((item, index) =>
               <ProductItem singleProductItem = {item} key={index} />
        )}
        </ul>
    </div>
    </div>
  )
}

export default Props
