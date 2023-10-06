import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Indian Institute of Technology Ropar' title='Welcome to Department of Electrical Engineering' />
            <p style={{textShadow: '2px 2px 5px black'}}>Department imparts the knowledge in three programs, a Bachelors programme with a total intake of 60 students per academic year, a Master of Technology and a Doctoral (Ph.D.) programme to upskill technical and research excellence in specialized avenues of Electrical Engineering.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
