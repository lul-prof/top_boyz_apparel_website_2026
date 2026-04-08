import "./SingleMerchandisePage.css";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import {ShopContext} from '../../context/shopContext'
import { useState } from "react";

const SingleMerchandisePage = () => {
  const { id } = useParams();
  const {products}=useContext(ShopContext);
  const product = products.find((prod) => prod._id === id);
  const [size,setSize]=useState("")
  const navigate=useNavigate();

  const {addToCart}=useContext(ShopContext)

  return (
    <>
      <div className="single-merchandise-container">
        {/*---------------------*/}
        <div className="sm-top">
          <div className="sm-top-left">
            <img src={product.image[0]} alt="" />
          </div>
          <div className="sm-top-right">
            <div className="sm-top-right-title">
              <h2>{product.title}</h2>
            </div>
            <div className="sm-top-right-price">
              <h3>
                {"kes"} {product.price}
              </h3>
            </div>

            <div className="sm-top-description">
              <p>{product.description}</p>
            </div>

            <div className="sm-top-size">
              <h2>Select Size</h2>
              <input
                type="text"
                placeholder="e.g 39 for shoes & M for clothes"
                value={size}
                onChange={(e)=>(setSize(e.target.value))}
              />
            </div>

            <div className="sm-top-cart">
              <button onClick={()=>(addToCart(product._id,size))}>ADD TO CART</button>
            </div>

            <hr />
            <p>100% original product</p>
            <p>Cash on Delivery Available</p>
            <p>Easy Exchange policy</p>
          </div>
        </div>
        {/*---------------------*/}
        <div className="sm-bottom">
          <div className="sm-header">
            <h1>RELATED PRODUCTS</h1>
          </div>
          <div className="related-products">
            {products.map((prod) => {
              if (prod.subCategory === product.subCategory && prod.category === product.category) {
                return (
                  <div key={prod._id} className="related-product">
                    <div className="related-product-image">
                     <Link to={`/merchandise/${prod._id}`}> <img src={prod.image[0]} alt="image" /></Link>
                    </div>

                    <div className="related-product-title">
                      <h2>{prod.title}</h2>
                    </div>

                    <div className="related-product-price">
                      <p>
                        {"kes"} {prod.price}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMerchandisePage;
