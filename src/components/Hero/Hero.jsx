import React from 'react'
import './Hero.css'
import shoe_image from '../../assets/images/shoe_image.png'
import amazon from '../../assets/images/amazon.png'
import flipkart from '../../assets/images/flipkart.png'

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-left__heading">
          Your feat deserve the best
        </div>
        <p className="hero-left__content">
        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-left__buttons">
          <button className='hero-left__button__shop button'>Shop Now</button>
          <button className='hero-left__button__category button'>Category</button>
        </div>
        <div className='hero-left__shops'>
          <p>Also available on</p>
          <div className="shops">
            <img src={amazon} alt="Amazon logo" />
            <img src={flipkart} alt="Flipkart logo" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right__image__container">
          <img src={shoe_image} alt="Shoe Image Here" className='hero-right__image' />
        </div>
      </div>
    </section>
  )
}

export default Hero
