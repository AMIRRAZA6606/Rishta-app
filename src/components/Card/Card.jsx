import React from 'react'
import "./card.css"
import banner2Img from '../../assets/images/banner2-img.png'
const Card = () => {
  return (
    <div className='main'>
      <div className="banner2-image">
        <img src={banner2Img} alt="" />
      </div>
      <div className="banner2-content">
        <span id='span1'>Wahaj & Yumna</span>
        <p>I found my match on Rishta.com.
          com on one month.Not yet
          married butgoing steady with
          him.There cheers to here.Fairy
          tales.... <span>Read more</span> </p>
      </div>
    </div>
  )
}

export default Card