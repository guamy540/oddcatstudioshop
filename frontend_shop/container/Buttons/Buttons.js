import React from 'react'
import product from '../../../backend_sanity/schemas/product'
import {Navbar, Product} from '../../components'
import {client} from '../../lib/client'
import { useState } from 'react'

const Home = ({products}) => {
  return (
    <div> 
        <div className="products-heading">
          <h2>Buttons</h2>
          <p>Buy the stuff!</p>
        </div>
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product}/>)} 
        </div>  
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products}
  }
}

export default Home
