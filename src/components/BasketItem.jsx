import React from 'react'

const BasketItem = ({product, item}) => {
  return (
    <>
    <li className="basket-item">
        {product.title} {product.price}* {item.amount}
    </li>
    </>
  )
}

export default BasketItem