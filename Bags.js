import { mapBags } from '../../products/shoes/ShoeStoreInfo'
import React from 'react'
import ProductModal from './productModal'

export default function() {
  return (
    <div className="flex">
      {' '}
      {mapBags.map(bag => (
        <ProductModal imgUrl={bag}> </ProductModal>
      ))}
    </div>
  )
}
