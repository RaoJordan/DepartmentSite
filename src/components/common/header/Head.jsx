import React from "react"
import banner from '../../../assets/photos/iitr-logo.png';

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <img src={banner} alt="hero-banner" className="hero-banner-img" style={{width: '50px', height: 'auto', position: 'absolute', left: '45px', mixBlendMode: 'multiply'}} />
            <h2>Indian Institute of Technology Ropar</h2>
            <span>भारतीय प्रौद्योगिकी संस्थान रोपड़</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
