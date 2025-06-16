

const ButtonComponent = () => {
    return <button>Click</button>
}

const ProductItem = ({singleProductItem, key}) => {
  return (
    <div>
        <h5 key={key} >{singleProductItem}</h5>
        <ButtonComponent/>
        </div>
  )
}

export default ProductItem
