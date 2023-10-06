import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome' style={{marginBottom: '50px'}}  >
        <Heading title='OUR ACHIEVEMENTS' style={{margin: '0px', padding: '0px'}} />
        <div className='container flexSB' >
          <div className='left row' style={{paddingTop: '0px', marginTop: '0px'}}>
            <div className='items'>
              {homeAbout.slice(0,3).map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' style={{marginRight:'10px'}} />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                  
                )
              })}
            </div>
            {/* <img src='./images/about.webp' alt='' /> */}
          </div>
          <div className='right row' style={{paddingTop: '0px'}} >
            {/* <Heading title='OUR ACHIEVEMENTS' /> */}
            <div className='items'>
              {homeAbout.slice(3,6).map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' style={{marginRight:'10px'}} />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
