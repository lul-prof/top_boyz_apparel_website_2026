import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './FeaturedCollectionComponent.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

const FeaturedCollectionComponent = () => {
    const {products}=useContext(ShopContext);
  return (
    <>
    <div className="fc-header">
            <h1>LATEST COLLECTIONS</h1>
            <h2>Welcome to the ultimate fashion hub</h2>
            <h3>Kenya's leading E-commerce store</h3>
            <hr />
    </div>
    
    <div className="featured-collection-container">
        {
            products.length<=0
            ?
            <div className="shimmer">
                <div className="shimmer-class">

                </div>
                <div className="shimmer-class">

                </div>
                <div className="shimmer-class">

                </div>
                <div className="shimmer-class">

                </div>
            </div>
            :
            <div className="featured-clothes">
            {
                products.map((product)=>(
                    <div key={product._id} className="featured-cloth">
                        <div className="featured-cloth-image">
                           <Link to={`/merchandise/${product._id}`}><img src={product.image[0]} alt="" /></Link> 
                        </div>
                        <div className="featured-cloth-title">
                            <p>{product.title}</p>
                        </div>
                        <div className="featured-cloth-price">
                            <p>{"kes"} {product.price}</p>
                        </div>
                    </div>
                )).slice(2,10)
            }
        </div>
        }
    </div>
    
    </>
  )
}

export default FeaturedCollectionComponent