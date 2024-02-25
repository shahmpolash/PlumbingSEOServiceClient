import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (

    

    <>

      <section className="service-sec overflow-hidden space" id="service-sec" style={{
        backgroundImage:
          "url(https://i.postimg.cc/rF6FKZdL/service-bg-2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

      }}>
        <div className="container">
          {
            service.map(s=><div className="title-area text-center">
            <span className="sub-title">{s.serviceHeading}</span>
            <h2 className="sec-title">{s.servicesubHeading}</h2>
          </div>)
          }
          
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="service-card_wrap style2">
              {
                items.map(b => b.serviceName === 'Main' && <div className="service-card style1 wow fadeInUp" style={{
                  backgroundImage:
                    "url(https://i.postimg.cc/yxpdG71g/about-bg-1.jpg)",
  
                }}>
                  <div className="service-card_img">
                    <img src={b.serviceImg} alt="image" />
                  </div>
                  <div className="service-card_content">
                    <div className="service-card_icon">
                      <img src={b.serviceIcon} alt="Icon" />
                    </div>
                    <h3 className="box-title">{b.serviceTitle}</h3>
                    <p className="service-card_text">{b.serviceDetails}</p>
                    
                  </div>
                </div> )
              }
              
              <div className="service-card_wrap">

                {
                  items.map(i => i.serviceName === 'NotMain' &&
                  <div className="service-card wow fadeInRight" style={{
                    backgroundImage:
                      "url(https://i.postimg.cc/yxpdG71g/about-bg-1.jpg)",
  
                  }}>
                    <div className="service-card_content">
                      <div className="service-card_icon">
                        <img src={i.serviceIcon} alt="Icon" />
                      </div>
                      <h3 className="box-title">{i.serviceTitle}</h3>
                      <p className="service-card_text">{i.serviceDetails}</p>
                      
                    </div>
                  </div> )
                }
                
                
               
              
              </div>
            </div>
          </div>
        </div>
      </section>


    </>


  );
};

export default ServicesSection;
