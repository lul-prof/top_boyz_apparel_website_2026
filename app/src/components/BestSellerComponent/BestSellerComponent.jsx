import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { products } from '../../assets/assets'
import './BestSellerComponent.css'

const BestSellerComponent = () => {
  return (
    <>
    <div className="bs-header">
            <h1>BEST SELLERS</h1>
            <h2>Tired of crowded malls and markets?</h2>
            <h3>Say hello to our online store</h3>
            <hr />
    </div>
    <div className="bestseller-container">
        <div className="bestseller-clothes">
            {
                products.map((product)=>(
                    product.bestseller
                    ?
                    <div key={product._id} className="bestseller-cloth">
                        <div className="bestseller-image">
                            <img src={product.image[0]} alt="" />
                        </div>
                        <div className="bestseller-title">
                            <p>{product.title}</p>
                        </div>
                        <div className="bestseller-price">
                            <p>{"kes"} {product.price}</p>
                        </div>

                    </div>
                    :
                    <>
                    
                    </>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default BestSellerComponent