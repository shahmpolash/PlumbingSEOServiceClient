import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-subscriber');
        alert('Subscribers is Updated');
      });


  }










  return (


    <>

      <div>
        <footer className="footer-wrapper footer-layout2">
          <div className="widget-area">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-6 col-xl-4 footer-border">
                {
                      footerSocial.map(d=> <div className="widget widget_nav_menu  footer-widget">
                  
                      <h3 className="widget_title">About Us</h3>
                      <div className="menu-all-pages-container">
                        <p>{d.mainAbout}</p>
                      </div>
                    </div> )
                    }
                 
                </div>

                {
                  logo.map(l => <div className="col-md-6 col-xl-4 footer-border">
                    <div className="widget footer-widget">
                      {
                        footerSocial.map(s => <div className="th-widget-about">
                          <div className="about-logo text-center">
                            <a href="/"><img src={l.logo} alt="Poolax" /></a>
                          </div>
                          <p className="text-center">{s.aboutText}</p>

                          
                          <div className="footer-search-contact mt-25">
                            <form onSubmit={handleSubscriber}>
                              <input className="form-control" type="email" name="subemail" placeholder="Enter your email" />
                            </form>
                            <div className>
                              <button type="submit" className="th-btn"><i className="fa-light fa-paper-plane" /></button>
                            </div>
                          </div>
                          <div className="th-social footer-social mt-30 text-center">
                            <a href={s.fblink}><i className="fab fa-facebook-f" /></a>
                            <a href={s.inslink}><i className="fab fa-instagram" /></a>

                          </div>
                        </div>)
                      }



                    </div>
                  </div>)
                }

                <div className="col-md-6 col-xl-4 footer-border">

                  {
                    footerAddress.map(a => <div className="widget footer-widget">
                      <h3 className="widget_title">Contact Us</h3>
                      <div className="th-widget-about">
                        <p className="footer-info"><i className="fas fa-map-marker-alt" />{a.banLocation}</p>
                        

                        <div className="footer-info"> <i className="fa-solid fa-phone" />
                          <p className="footer-info_text">
                            <p>{a.banPhone} </p>


                          </p>
                        </div>
                        

                        <p className="footer-info"><i className="fas fa-envelope" /><a className="text-inherit" href="/">{a.footerEmail}</a></p>
                      </div>
                    </div>)
                  }

                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <div className="container">
              <div className="row align-items-center">

                {
                  footerCopyright.map(c => <div className="col-12">
                    <p className="copyright-text text-white text-center">{c.copyrightText}</p>
                  </div>)
                }

              </div>
            </div>
          </div>
          <div className="shape-mockup" data-top="0%" data-left="0%"><img src="assets/img/shape/footer_shape_2_1.png" alt="shape" />
          </div>
          <div className="shape-mockup d-none d-xl-block" data-bottom="12%" data-right="0%"><img src="assets/img/shape/footer_shape_2_2.png" alt="shape" /></div>
        </footer>
        {/*********************************
			Code End  Here 
	******************************** */}
        {/* Scroll To Top */}
        <div className="scroll-top">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919' }}>
            </path>
          </svg>
        </div>
      </div>

    </>
  );
};

export default Footer;
