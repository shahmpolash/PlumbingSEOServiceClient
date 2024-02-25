import React, { useEffect, useState } from 'react';

const CounterSection = () => {

  const [countersec, setCounter] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  return (
    // <>
    //     {
    //         countersec.map(e => <section className="counter-section section-gap-top-less">
    //             <div className="container">
    //                 <div className="row justify-content-center">
    //                     <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
    //                         <div className="counter-item counter-box mt-30">
    //                             <div className="icon">
    //                                 <i className="flaticon-rating" />
    //                             </div>
    //                             <div className="counter-wrap">
    //                                 <span className="counter">{e.happyClientsNumber}</span>
    //                                 <span className="suffix">+</span>
    //                             </div>
    //                             <p className="title">{e.happyClientsText}</p>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
    //                         <div className="counter-item counter-box bg-color-2 mt-30">
    //                             <div className="icon">
    //                                 <i className="flaticon-web-design" />
    //                             </div>
    //                             <div className="counter-wrap">
    //                                 <span className="counter">{e.projectCompleteNumber}</span>
    //                                 <span className="suffix">+</span>
    //                             </div>
    //                             <p className="title">{e.projectCompleteText}</p>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
    //                         <div className="counter-item counter-box bg-color-3 mt-30">
    //                             <div className="icon">
    //                                 <i className="flaticon-checked" />
    //                             </div>
    //                             <div className="counter-wrap">
    //                                 <span className="counter">{e.yearofExperienceNumber}</span>
    //                                 <span className="suffix">+</span>
    //                             </div>
    //                             <p className="title">{e.yearofExperienceText}</p>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
    //                         <div className="counter-item counter-box bg-color-4 mt-30">
    //                             <div className="icon">
    //                                 <i className="flaticon-winner" />
    //                             </div>
    //                             <div className="counter-wrap">
    //                                 <span className="counter">{e.winingAwardNumber}</span>
    //                                 <span className="suffix">+</span>
    //                             </div>
    //                             <p className="title">{e.winingAwardText}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //         )

    //     }



    // </>

    <>
    {
      countersec.map(e=>  <div className="overflow-hidden mb-5" style={{
        backgroundImage:
          "url(https://i.postimg.cc/HLTgbfmf/counter-bg-1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

      }}>
        <div className="container mb-5">
          <div className="counter-sec">
            <div className="th-counterup wow fadeInLeft">
              <div className="inner">
                <div className="content">
                  <h3 className="counter"><span className="odometer" data-count="2,564">{e.happyClientsNumber}</span>
                    <span className="counter-number">+</span>
                  </h3>
                  <p className="counter-card_text">{e.happyClientsText}</p>
                </div>
              </div>
            </div>
            <div className="th-counterup wow fadeInLeft">
              <div className="inner">
                <div className="content">
                  <h3 className="counter"><span className="odometer" data-count={164}>{e.projectCompleteNumber}</span>
                    <span className="counter-number">+</span>
                  </h3>
                  <p className="counter-card_text">{e.projectCompleteText}</p>
                </div>
              </div>
            </div>
            <div className="th-counterup wow fadeInLeft">
              <div className="inner">
                <div className="content">
                  <h3 className="counter"><span className="odometer" data-count="2,985">{e.winingAwardNumber}</span>
                    <span className="counter-number">+</span>
                  </h3>
                  <p className="counter-card_text">{e.winingAwardText}</p>
                </div>
              </div>
            </div>
            <div className="th-counterup wow fadeInLeft">
              <div className="inner">
                <div className="content">
                  <h3 className="counter"><span className="odometer" data-count={80}>{e.yearofExperienceNumber}</span>
                    <span className="counter-number">+</span>
                  </h3>
                  <p className="counter-card_text">{e.yearofExperienceText}</p>
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

export default CounterSection;