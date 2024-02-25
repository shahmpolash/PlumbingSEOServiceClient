import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (



    <>

      {
        banners.map(b => <div>

          <div className="th-hero-wrapper  hero-4" style={{
            backgroundImage:
              "url(https://i.ibb.co/5MZ9BH6/hero-bg-2-1.jpg)",

          }}>

            {
              banners.map(b => <div className="hero-slider-4 th-carousel" id="heroSlide4">
                <div className="th-hero-slide">
                  <div className="th-hero-bg">
                    <img src="assets/img/hero/hero_overlay_2_1.png" alt="Hero Image" />
                    <div className="th-hero-shape" data-ani="slideinup" data-ani-delay="0.7s">
                    </div>
                  </div>
                  <div className="container">
                    <div className="row align-items-end">
                      <div className="col-xl-6">
                        <div className="hero-style4">
                          <span className="hero-subtitle" data-ani="slideindown">{b.bannerDetails}</span>
                          <h2 className="hero-title mb-0" data-ani="slideindown">
                            {b.bannerHeading}</h2>
                          <h4 className="hero-big-title" data-ani="slideindown" >
                            {b.buttonTwoLink}</h4>

                          <div className="btn-group mt-30" data-ani="slideindown">
                            <a href={b.buttonOneLink} className="th-btn style4 border-radius">{b.buttonOneText}</a>
                          </div>

                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="hero-style4">
                        
                        <img src={b.bannerImage} alt="feature" />
                        
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>)
            }


          </div>

        </div>)
      }


    </>
  );
};

export default Banner;
