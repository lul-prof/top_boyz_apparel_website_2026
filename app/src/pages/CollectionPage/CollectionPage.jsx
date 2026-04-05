import React from 'react'
import './CollectionPage.css'
import {products} from '../../assets/assets'

const CollectionPage = () => {
  return (
    <>
    <div className="collection-container">
      {/*------------------------------*/}
      <div className="container-left">
        <div className="collection-left-header">
          <h2>FILTERS</h2>
        </div>
        <div className="collection-left-filters">
          <select defaultValue={"Sort by Price"}>
            <option value="">Sort by: High_Low</option>
            <option value="">Sort by: Low_High</option>
            <option value="">Sort by: Relevant</option>
          </select>
        </div>
      </div>
      {/*------------------------------*/}
      <div className="container-right">
        <div className="collection-right-header">
          <h2>ALL COLLECTIONS</h2>
        </div>
        <div className="collection-right-content">
          {
            products.map((product)=>(
              <div key={product._id} className="product">
                  <div className="product-image">
                    <img src={product.image[0]} alt="image" />
                  </div>
                  <div className="product-title">
                    <h3>{product.title}</h3>
                  </div>
                  <div className="product-price">
                    <p>{"kes"} {product.price}</p>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default CollectionPage