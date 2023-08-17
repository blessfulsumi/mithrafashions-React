import React from 'react'
import FilterComponent from '../components/Filter.component'
import ProductListComponent from '../components/ProductList.component'

const HomePage = () => {
  return (
    <div className='flex gap-2'>
      <FilterComponent/>
      <ProductListComponent/>
    </div>
  )
}

export default HomePage