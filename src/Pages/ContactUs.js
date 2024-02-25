import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/all-messages');
        alert('Message is Updated');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (



    <>
    <HeaderBottom></HeaderBottom>
      <div>


        <div className="space" id="contact-sec">
          <div className="container">
            <div className="row gy-40">
              <div className="col-xl-7 col-xxl-6">
                <div className="title-area mb-10">
                  <h2 className="sec-title">Contact Information</h2>

                </div>
                {
                  footerAddress.map(b => <div className="contact-info-wrap">
                    <div className="contact-info">
                      <div className="contact-info_icon">
                        <i className="fa-light fa-location-dot" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Our Address</h3>
                        <span className="contact-info_text">{b.banLocation}</span>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="contact-info_icon">
                        <i className="fa-light fa-phone" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Phone Number</h3>
                        <span className="contact-info_text">
                          <a href="/"> {b.banPhone}</a>
                          
                        </span>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="contact-info_icon">
                        <i className="fa-light fa-envelope" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Email Address</h3>
                        <span className="contact-info_text">
                          <a href="/"> {b.footerEmail}</a>
                          
                        </span>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="contact-info_icon">
                        <i className="fa-light fa-clock" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Working Time</h3>
                        <span className="contact-info_text">Mon-Sat: 9am-8pm Sunday Closed</span>
                      </div>
                    </div>
                  </div>
                  )
                }


              </div>
              <div className="col-xl-5 col-xxl-5 offset-xxl-1">
                <div className="contact-form-wrapper">
                  <form onSubmit={handleMessage} action="mail.php" method="POST" className="contact-form ajax-contact">
                    <h3 className="form-title text-center">Get In Touch</h3>
                    <div className="row">
                      <div className="form-group col-12">
                        <i className="fa-sharp fa-light fa-user" />
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                      </div>
                      <div className="form-group col-12">
                        <i className="fa-sharp fa-regular fa-envelope" />
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                      </div>
                      <div className="form-group col-12">
                        <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" />
                        <i className="fal fa-phone" />
                      </div>
                      <div className="form-group col-12">
                        <input type="tel" className="form-control" name="subject" id="subject" placeholder="Your Subject" />
                        <i className="fal fa-subject" />
                      </div>
                      <div className="form-group col-12">
                        <input type="tel" className="form-control" name="messageStatus" id="messageStatus" value="UnRead" hidden placeholder="Your Message Status" />
                        <i className="fal fa-subject" />
                      </div>
                      <div className="form-group col-12">
                        <i className="fal fa-comment" />
                        <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
                      </div>
                      <div className="form-btn col-12">
                        <button className="th-btn fw-btn">Send Messages Now</button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ContactUs;