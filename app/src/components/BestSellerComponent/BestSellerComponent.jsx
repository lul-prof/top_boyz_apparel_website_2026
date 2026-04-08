import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './BestSellerComponent.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

const BestSellerComponent = () => {
    const {products}=useContext(ShopContext);
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
                         <Link to={`/merchandise/${product._id}`}><img src={product.image[0]} alt="" /></Link> 
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