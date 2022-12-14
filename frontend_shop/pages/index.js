import React from 'react'
import product from '../../backend_sanity/schemas/product'
import {Navbar, Product, Header} from '../components'
import {client} from '../lib/client'
import { useState } from 'react'

const Home = ({products}) => {
  const [filterProducts, setFilterProducts] = useState([])
  const [truthy, setTruthy] = useState(false)


  return (
    <div> 

      <Header/>

        <div className='prints_container' id='prints'>
        <div className="products-heading">
          <h2>Prints</h2>
          <p>Buy the stuff!</p>
        </div>
        <div className="products-container">
          {products?.map((product) => product.category ==='Print' && <Product key={product._id} product={product}/>)} 
        </div>
        </div>

        <div className='stickers_container' id='stickers'>
          <div className="products-heading">
            <h2>Stickers</h2>
            <p>Buy the stuff!</p>
          </div>
          <div className="products-container">
            {products?.map((product) => product.category ==='Stickers' && <Product key={product._id} product={product}/>)} 
          </div>
        </div>

        <div className='buttons_container' id='buttons'>
          <div className="products-heading">
            <h2>Buttons</h2>
            <p>Buy the stuff!</p>
          </div>
          <div className="products-container">
            {products?.map((product) => product.category === 'Buttons' && <Product key={product._id} product={product}/>)} 
          </div>
        </div>

        <div className='singletons_container' id='singletons'>
          <div className="products-heading">
            <h2>Singletons</h2>
            <p>Buy the stuff!</p>
          </div>
          <div className="products-container">
            {products?.map((product) => product.category ==='Singleton' && <Product key={product._id} product={product}/>)} 
          </div>
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
