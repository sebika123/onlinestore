
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>

      </>
    );
  };

  const ShowProduct = () => {
    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };

    return (
      <>

        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            ${product.price}
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark px-3 py-2" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </Link>
          </h3>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
