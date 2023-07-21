import React, { useState, useEffect ,useRef} from 'react'
import Skeleton from "react-loading-skeleton"; 
import {Link } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const componentMounted = useRef(true);
  
    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
  
        if (componentMounted.current) {
          setData(products);
          setFilter(products);
          setLoading(false);
        }
      };
  
      getProducts();
  
      return () => {
        componentMounted.current = false;
      };
    }, []);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
    
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilter(filteredProducts);
      };


    const Loading = () => {
        return (
            <>



                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>

                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>

                </>
        );
    };

const filterProduct=(cat)=>{

    const updatedList=data.filter((x)=>x.category===cat);
    setFilter(updatedList);
}

    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">

                    <button className="btn.btn-outline-dark me-2" onClick={()=>setFilter(data)}>All
                    </button>
                    {/* <button className="btn.btn-outline-dark me-2"onClick={()=>filterProduct("men's clothing")}>Men Clothing
                    </button> */}
                    <button className="btn.btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")}>Women Clothing
                    </button>
                    <button className="btn.btn-outline-dark me-2"onClick={()=>filterProduct("jewelery")}>Jewellery
                    </button>
                    <button className="btn.btn-outline-dark me-2"onClick={()=>filterProduct("electronics")}>Electronics
                    </button>

                </div>
                {filter.map((product) => {
                    return (

                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4"key={product.id} >
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold">${product.price}</p>
                                        <Link to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
            
                }
           ) }
        
            </>
        

);
    };
    

    return (
        <div>
            <div className="contatiner my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">LATEST PRODUCT</h1>
                        <hr />
                    </div>
                </div>


                <div>
      <div>
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      </div>

                <div className="row justify-content-center">

                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
export default Products