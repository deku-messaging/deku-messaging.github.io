import React from 'react';
import { FaTwitter, FaGithub, FaGooglePlay, FaEnvelope, FaMapMarker  } from 'react-icons/fa';
import './App.css'; 

function Footer() {
  return (
    <>
      {/* Footer Section Begins */}
      <section id="footer" className="footer">
        <div className="footerBg"></div>

        <div className="container">
          <div className="row">
            {/* download section */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="contact-form btm-brdr">
              <h4 className="fTitle"> DownLoad Our <span>App</span> </h4>
              <div id="wrap">
                <a href="https://play.google.com/store/apps/details?id=com.afkanerd.deku" class="btn-slide">
                  <span class="circle"><FaGooglePlay /></span>
                  <span class="title">PlayStore</span>
                  <span class="title-hover"> Download Deku</span>
                </a>
                <a href="https://github.com/deku-messaging" class="btn-slide2">
                  <span class="circle2"><FaGithub /></span>
                  <span class="title2">Github</span>
                  <span class="title-hover2">Download Deku</span>
                </a>
                </div>
              </div>
            </div>

            {/* Contact section */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="contact-address btm-brdr">
                <h4 className="fTitle"> Contact <span>Us</span> </h4>
                <ul>
                  {/* <li> <FaPhone aria-hidden="true" /><span>1800 999 87 21</span> </li> */}
                  <li> <FaMapMarker aria-hidden="true" /> <span>Sonac Street, Bamenda, Cameroon</span> </li>
                  <li><FaEnvelope aria-hidden="true" /><span>developers@smswithoutborders.com</span> </li>
                </ul>
              </div>
            </div>
            {/* socail icon section */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
           
              
              <div className="social-icons">
                <h4 className="fTitle">  Our Social <span>Media Handles</span> </h4>
                <ul>
                  <li><a href="https://twitter.com/Deku_app"> <FaTwitter aria-hidden="true" /> </a></li>
                  <li><a href="https://github.com/deku-messaging"> <FaGithub aria-hidden="true" /> </a></li>
                  <li><a href="https://play.google.com/store/apps/details?id=com.afkanerd.deku"> <FaGooglePlay aria-hidden="true" /> </a></li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Footer Section Ends */}


      {/* Copyright Section Begins */}
      <section id="copyright" className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6> ©<a href="http://scanfcode.com" target="_blank" rel="noopener noreferrer">Deku Messaging</a> </h6>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright Section Ends */}
    </>
  );
}

export default Footer;
