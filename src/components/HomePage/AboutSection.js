import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (

    <>


      {
        about.map(a => <div className="about-sec overflow-hidden space" id="about-sec" style={{
          backgroundImage:
            "url(https://i.postimg.cc/yxpdG71g/about-bg-1.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

        }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="wow fadeInLeft">
                  <div className="title-area mb-25">
                    <span className="sub-title style1">{a.aboutText}</span>
                    <h2 className="sec-title mb-20">{a.aboutHeading}</h2>
                    <p className>{a.aboutDetails}</p>
                  </div>
                  <div className="checklist style2">
                    <ul>
                      <li>{a.aboutPointOne}</li>
                      <li>{a.aboutPointTwo}</li>
                      <li>{a.aboutPointThree}</li>
                      <li>{a.aboutPointFour}</li>

                    </ul>
                  </div>
                  <div className="btn-group justify-content-start">
                    <a href={a.buttonLink} className="th-btn">{a.buttonText}</a>
                    <div className="feature-wrapper">
                      <div className="icon-btn">
                        <a className href="tel:+46825476243"><i className="fa-light fa-phone" /></a>
                      </div>
                      <div className="media-body">
                        <span className="header-info_label">{a.callText}</span>
                        <p className="header-info_link">{a.callNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight">
                <div className="img-box2">
                  <div className="img1 global-img">
                    <img src={a.aboutImgOne} alt="About" />
                  </div>
                  <div className="img2 global-img movingX">
                    <img src={a.aboutImgTwo} alt="About" />
                  </div>
                  <div className="img3 global-img jump">
                    <img src={a.aboutImgThree} alt="About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }





    </>
  );
};

export default AboutSection;
