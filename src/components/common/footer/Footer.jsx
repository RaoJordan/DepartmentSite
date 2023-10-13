import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span></span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>IIT ROPAR</h1>
            <span>ELECTRICAL ENGINEERING DEPARTMENT</span>
            <p>Build your Dream Electrical Engineering Career.</p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Opportunities</h3>
            <ul>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/jobs/faculty-positions">
                  Faculty Positions
                </a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/jobs/project-positions">
                  Ph.D. Positions
                </a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/staff-positions">
                  Staff Positions
                </a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/how-apply">
                  Project Positions
                </a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/institute-post-doctoral-fellowship">
                  Post Doctorate Fellowship
                </a>
              </li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/downloads/forms.html">
                  Download Forms
                </a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/moodle">Moodle and CRP</a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/">IIT Ropar Website</a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="https://www.google.co.in/maps/dir/Railway+Station+Rupnagar,%20%20+Ropar,+Punjab/Indian+Institute+of+Technology+Ropar+Transit+Campus/@30.9773189,76.5291587,16z/%20%20am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x39055439f7aebbc3:0x232ba8e4a5b48bae!2m2!1d76.5307591!2d30.9791349!1m5!1m1!%20%201s0x0:0x5d16c2617cfdbdb8!2m2!1d76.538868!2d30.9756394">
                  How to reach IIT Ropar
                </a>
              </li>
            </ul>
          </div>
          <div className="box link">
            <h3>Other Links</h3>
            <ul>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/deans">Deans</a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/associate-deans">
                  Associate Deans
                </a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/head-departments">
                  Head of Departments
                </a>
              </li>
              <li>
                <a className="footerlinks" target="_blank" href="http://www.iitrpr.ac.in/administrative-officials">
                  Administrative Officials
                </a>
              </li>
            </ul>
          </div>
          <div className="box-last">
            <h3>Reach Us</h3>
            <ul>
              <li className="box-last-li">
                <i className="fa fa-map" style={{marginRight:"5px"}}></i>
                <a className="footerlinks" target="_blank" href="https://www.google.com/maps/dir/Rupnagar+Old+Bus+Stand,+Chhota+Khera,+Basant+Nagar,+Rupnagar,+Punjab+140001/Indian+institute+of+Technology+Ropar,+Bara+Phool,+Punjab+140001/@30.974903,76.503119,13z/data=!4m14!4m13!1m5!1m1!1s0x3905543310e70e63:0x63397d7938035537!2m2!1d76.5338166!2d30.9669695!1m5!1m1!1s0x390554d4ffffffff:0xb81f1e2708c91100!2m2!1d76.4731998!2d30.9709183!3e0?hl=en">
                  EE-Office, Department of Electrical Engineering, J.C.Block,
                  IIT Ropar, Rupnagar, Punjab, 140001
                </a>
              </li>
              <li className="box-last-li">
                <i className="fa fa-phone-alt" style={{marginRight:"5px"}}></i>
                <span>+91-1881-232202</span>
              </li>
              <li className="box-last-li">
                <i className="fa fa-paper-plane" style={{marginRight:"5px"}}></i>
                <a className="footerlinks" target="_blank" href="mailto:eeoffice@iitrpr.ac.in">eeoffice@iitrpr.ac.in</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This site is made with{" "}
          <i className="fa fa-heart"></i> by Pankaj, Mohit and Yash.
        </p>
      </div>
    </>
  );
};

export default Footer;