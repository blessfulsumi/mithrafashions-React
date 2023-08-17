import React from 'react'
import FilterComponent from '../components/Filter.component'
import ProductListComponent from '../components/ProductList.component'

const HomePage = () => {
  return (
    <div className='grid grid-cols-[30%_70%]'>
    
     
      <FilterComponent/>
     
     
      <ProductListComponent/>
    
    </div>
  )
}

export default HomePage