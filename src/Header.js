import React from 'react';
import { FaGooglePlay, FaGithub, FaDownload  } from 'react-icons/fa';
import { Button } from 'react-bootstrap';



const Headers = () => {
  return (
    <body>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className='heading-primary'>Your Ultimate Secure Messaging Solution</h1>
              <hr />
           
            <p className='hero-description'>Discover Deku SMS, the groundbreaking open-source 
                SMS app that redefines communication. With military-grade encryption, 
                innovative features, and a community-driven spirit, 
                Deku SMS is your gateway to a new era of secure messaging.</p>
          </div>
      <div className="hero-btns">

      <Button variant="link" href="https://play.google.com/store/apps/details?id=com.afkanerd.deku" className="nav-icon-button margin-left-btn">
                        Download  <FaDownload />
                    </Button>
                    <Button variant="link"  href="#us" className="nav-icon-button margin-left-btn">
                        Learn More  &darr;
                    </Button>

      {/* <a href="https://play.google.com/store/apps/details?id=com.afkanerd.deku" className="btn btn--fill margin-right-btn">
             DOWNLOAD <FaGooglePlay />
            </a> */}
            {/* <a href="#us" className="btn btn--outline margin-right-btn">
              Learn more
            </a> */}
      </div>
        </div>
      </section>
    </body>
  );
};

export default Headers;
