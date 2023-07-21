import React from 'react'

import Products from './Products';
import Product from './Product';


const Home=()=> {
  return (
    <div className="hero">
<div class="card text-bg-dark">
  <img src="./images/back.jpg" class="card-img" alt="background"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW PRODUCTS</h5>
    <p class="card-text lead fs-4">CHECK OUT THE PRODUCTS</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
<Products/>
</div>


  )
}
export default Home;