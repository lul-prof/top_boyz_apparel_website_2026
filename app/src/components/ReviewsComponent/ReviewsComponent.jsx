import React from 'react'
import './ReviewsComponent.css'
import { assets, reviews } from '../../assets/assets'

const ReviewsComponent = () => {
  return (
    <>
    <div className="rc-header">
            <h1>CUSTOMER REVIEWS</h1>
            <h2>We Value your views and opinions</h2>
            <hr />
    </div>
    <div className="reviews-container">
        {
            reviews.map((review)=>(
                <div key={review._id} className="review">
                    <div className="review-top">
                        <div className="review-top-1">
                            <img src={review.avatar} alt="avatar" />
                        </div>
                        <div className="review-top-2">
                            <p>{review.name}</p>
                        </div>
                    </div>
                    <div className="review-center">
                        <img src={assets.star} alt="star" />
                        <img src={assets.star} alt="star" />
                        <img src={assets.star} alt="star" />
                        <img src={assets.star} alt="star" />
                        <img src={assets.star} alt="star" />
                    </div>
                    <div className="review-bottom">
                        <p>{review.review}</p>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default ReviewsComponent