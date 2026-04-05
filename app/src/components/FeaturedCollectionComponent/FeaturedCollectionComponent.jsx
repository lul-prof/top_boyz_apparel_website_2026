import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './FeaturedCollectionComponent.css'
import { products } from '../../assets/assets'
import { Link } from 'react-router-dom'

const FeaturedCollectionComponent = () => {
  return (
    <>
    <div className="fc-header">
            <h1>LATEST COLLECTIONS</h1>
            <h2>Welcome to the ultimate fashion hub</h2>
            <h3>Kenya's leading E-commerce store</h3>
            <hr />
    </div>
    
    <div className="featured-collection-container">
        
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
                )).slice(15,30)
            }
        </div>
    </div>
    
    </>
  )
}

export default FeaturedCollectionComponent