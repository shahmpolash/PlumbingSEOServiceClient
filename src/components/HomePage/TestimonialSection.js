import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (
    // <>
    //   {/* <section class="testimonial-area pt-120 pb-120" style={divStyle}>
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-lg-6">
    //           {

    //             testimonialtext.map(text => <div class="about-title second-atitle pt-15">
    //               <h5>{text.testimonialText}</h5>
    //               <h2> {text.testimonialHeading}
    //               </h2>
    //               <p class="pt-15">
    //               {text.testimonialDetails}
    //               </p>
    //             </div>)
    //           }


    //         </div>

    //         <div class="col-lg-6">
    //           <div class="testimonial-active">
    //             {
    //               testimonial.map(e =>
    //                 <div class="single-testimonial">
    //                   <div class="testi-author">
    //                     <img src={e.image} alt="img" />
    //                     <div class="ta-info">
    //                       <h6>{e.personName}</h6>
    //                       <span>{e.personTitle}</span>
    //                     </div>
    //                   </div>
    //                   <div class="qt-img">
    //                     <img src="img/testimonial/qt-icon.png" alt="img" />
    //                   </div>
    //                   <p>
    //                     {e.desc}
    //                   </p>
    //                 </div>
    //               )
    //             }



    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section> */}
    //   <section className="client-section testimonial ptb-100">
    //     <div className="container">
    //       {
    //         testimonialtext.map(text => <div className="section-title pb-5">
    //           <h2>{text.testimonialHeading}</h2>
    //           <p>{text.testimonialText}</p>
    //         </div>)
    //       }


    //       <div className="row align-items-center">
    //         <div className="col-lg-6">
    //           <div className="clients-img">
    //             <img src="assets/img/clients/client_1.png" alt="client-1" />
    //             <img src="assets/img/clients/client_2.png" alt="client-2" />
    //             <img src="assets/img/clients/client_3.png" alt="client-3" />
    //             <img src="assets/img/clients/client_4.png" alt="client-4" />
    //             <img src="assets/img/clients/client_5.png" alt="client-5" />
    //           </div>
    //         </div>
    //         <div className="col-lg-6">
    //           {
    //             testimonial.map(e=> <div className="slider-item">
    //             <div className="qoute-icon">
    //               <img src="assets/img/resource/quotation_1.png" alt="quotation" />
    //             </div>
    //             <div className="inner-text">
    //               <p>
    //               {e.desc}
    //               </p>
    //             </div>
    //             {/* slider Image */}
    //             <div className="client">
    //               <div className="client-img">
    //                 <img src={e.image} alt="client-1" />
    //               </div>
    //               <div className="client-info">
    //                 <h6>{e.personName}</h6>
    //                 <span>{e.personTitle}</span>
    //               </div>
    //             </div>
    //           </div>)
    //           }
              


    //         </div>
    //       </div>
    //     </div>
    //     <div className="shape">
    //       <img src="assets/img/resource/shape_6.png" alt="shape" className="shape-inner" />
    //       <img src="assets/img/resource/Ellipse_1.png" alt="shape" className="shape-inner" />
    //       <img src="assets/img/resource/Rectangle_1.png" alt="shape" className="shape-inner" />
    //       <img src="assets/img/resource/Ellipse_1.png" alt="shape" className="shape-inner" />
    //       <img src="assets/img/resource/Rectangle_1.png" alt="shape" className="shape-inner" />
    //       <img src="assets/img/resource/shape_2.png" alt="shape" className="shape-inner" />
    //     </div>
    //   </section>

    // </>


    <>

<div className="testi-area2 position-relative overflow-hidden space">
  <div className="container">
    <div className="row align-items-end">
      <div className="col-lg-12">
        <div className="testi-card_wrapper">
          {
            testimonialtext.map(text=>  <div className="title-area">
            <span className="sub-title style1">{text.testimonialText}</span>
            <h2 className="sec-title">{text.testimonialHeading}</h2>
          </div> )
          }
         
        </div>
        {
          testimonial.map(e=>  <div className="testi-card-slide th-carousel" data-arrows="true" data-xl-arrows="true" data-ml-arrows="true" data-fade="true" data-slide-show={1}>
          <div>
            <div className="testi-card">
              <div className="testi-card_img">
                <img src={e.image} alt="Avater" />
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">{e.desc}</p>
                <h3 className="testi-card_name">{e.personName}</h3>
                <span className="testi-card_desig">{e.personTitle}</span>
                <div className="testi-card_review">
                  <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                </div>
                <div className="testi-quote"><img src="assets/img/shape/quote-2.svg" alt /></div>
              </div>
            </div>
          </div>
          
        </div>)
        }
       
        <div className="testi-card-tab" data-thnavfor=".testi-card-slide">
          <button className="tab-btn active" type="button"><img src="assets/img/testimonial/testi_thumb_2_1.png" alt="tab-btn image" /></button>
          <button className="tab-btn" type="button"><img src="assets/img/testimonial/testi_thumb_2_2.png" alt="tab-btn image" /></button>
          <button className="tab-btn" type="button"><img src="assets/img/testimonial/testi_thumb_2_3.png" alt="tab-btn image" /></button>
        </div>
      </div>
    </div>
  </div>
</div>

    

    
    
    
    </>
  );
};

export default TestimonialSection;
