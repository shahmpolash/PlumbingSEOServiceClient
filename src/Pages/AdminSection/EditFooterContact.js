import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const EditFooterContact = () => {

    const [footerad, setAddressfooter] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/footer-address/${id}`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const banLocation = event.target.banLocation.value;
        const ukLocation = event.target.ukLocation.value;
        const banPhone = event.target.banPhone.value;
        const ukPhone = event.target.ukPhone.value;
        const footerEmail = event.target.footerEmail.value;




        const contactSection = {

            banLocation,
            ukLocation,
            banPhone,
            ukPhone,
            footerEmail,




        };

        const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/footer-address/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
            });
    };



    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center mt-5 mb-5'>
            <section id="services" class="services-area pt-120 pb-90 fix mt-5 " >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row mt-5 mb-5">

                        <div class="col-lg-8 col-md-12 mt-5">


                            <h2 className='mt-5'> Update Footer Contact </h2>





                            <form class="contact-form " onSubmit={handlefooterAddress}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="banLocation" defaultValue={footerad.banLocation} placeholder="Your Location" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" hidden name="ukLocation" defaultValue={footerad.ukLocation} placeholder="UK Location" required />
                                        </div>
                                    </div>
                                
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="banPhone" defaultValue={footerad.banPhone} placeholder="Your Phone" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" hidden name="ukPhone" defaultValue={footerad.ukPhone} placeholder="UK hone" required />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="footerEmail" defaultValue={footerad.footerEmail} placeholder=" Your Email" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="th-btn" data-delay=".8s"> Update Address Details</button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>


            </section>
        </div>
    );
};

export default EditFooterContact;