import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));


  }, []);



  

  return (
    // <>

    //     {/* {
    //         action.map(a =>
    //             <section className="call-to-action style-two bg-color-secondary">
    //                 <div className="container">
    //                     <div className="row align-items-center justify-content-between">
    //                         <div className="col-lg-7">
    //                             <div className="cta-content">
    //                                 <h2 className="title">{a.heading}</h2>
    //                                 <p className="subtitle">{a.subHeading}</p>
    //                             </div>
    //                         </div>
    //                         <div className="col-auto">
    //                             <p className="cta-note">Get Every Single Updates</p>
    //                             <a href={a.buttonLink} className="th-btn bordered-white">{a.buttonText} <i className="far fa-long-arrow-right" /></a>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="cta-shape">
    //                     <img src="assets/img/shape/cta-shape.png" alt="Shape" />
    //                 </div>
    //             </section>)
    //     } */}

    //     {
    //         action.map(a=>  <section className="newsletter-section ptb-100 style-two">
    //         <div className="container">
    //             <div className="section-title title-light">
    //                 <h2>{a.heading}</h2>
    //                 <p>{a.subHeading}</p>
    //             </div>
    //             <form onSubmit={handleSubscriber} className="newsletter-form" data-bs-toggle="validator">
    //                 <div className="input-group">
    //                     <input className="form-control" placeholder="E-mail address" type="text" name="email" required autoComplete="off" />
    //                     <div className="cta-btn">
    //                         <button className="th-btn" type="submit">
    //                             Subscribe
    //                             <i className="envy envy-right-arrow" />
    //                         </button>
    //                     </div>
    //                 </div>
    //                 <div id="validator-newsletter" className="form-result" />
    //             </form>
    //         </div>
    //     </section>)
    //     }






    // </>

    <>

      <section className="cta-area" style={{
        backgroundImage:
          "url(https://i.postimg.cc/ncVf2TF6/cta-bg-1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 mb-5 mb-lg-0">
              <div className="title-area mb-0 text-center text-lg-start">
                <span className="sub-title style1">Feel Free to Contact Use</span>
                <h2 className="sec-title text-white">Get Premium Pool Services From With Us!</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="btn-group justify-content-lg-end justify-content-center">
                <a href="service.html" className="th-btn style4">Contact Us</a>
                
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default CallToAction;