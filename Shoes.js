import { mapShoes } from '../../products/shoes/ShoeStoreInfo'
import React from 'react'
import ProductModal from './productModal'
import Firestore from '../../hooks/firestore'

export default function() {
  const { docs } = Firestore('PRODUCTS')
  console.log(docs)
  return (
    <div className="flex">
      {' '}
      {docs.map(shoe => (
        <ProductModal imgUrl={shoe}> </ProductModal>
      ))}
    </div>
  )
}
