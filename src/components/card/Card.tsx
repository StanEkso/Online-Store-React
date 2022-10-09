import React, { FC } from 'react'
import { Product } from '../../types/product'

type Props = Product

const Card: FC<Props> = ({ name, description, color, price, rating }) => {
  return (
    <div>Card</div>
  )
}

export default Card