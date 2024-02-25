import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const FooterContact = () => {

    const [footeraddress, setAddressfooter] = useState([]);

    useEffect(() => {
        fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/footer-address`)
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
            
            ukPhone,
           
            banPhone,
            footerEmail,




        };

        const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/add-footer-address`;
        fetch(url, {
            method: "POST",
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
        <div className='container vh-100 d-flex align-items-center justify-content-center mt-5 vh-100'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">


                            <h2 className='mt-5'> Update Footer Contact </h2>

                            {
                                footeraddress.length === 1 &&
                                <>
                                    {
                                        footeraddress.map(c =>
                                            footeraddress.map(c =>
                                                <Link className='th-btn' to={`/edit-address-footer/${c._id}`}> Edit Address</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                footeraddress.length === 0 &&

                                <form class="contact-form " onSubmit={handlefooterAddress}>
                                    <div class="row">




                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text"  name="banLocation" placeholder=" Bangladesh Location" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text"  name="ukLocation" placeholder="UK Location" required />
                                            </div>
                                        </div>
                                     

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="banPhone" placeholder=" Bangladesh Phone" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="ukPhone" placeholder=" UK Phone" required />
                                            </div>
                                        </div>
                                     

                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text"  name="footerEmail" placeholder=" Footer Email" required />
                                            </div>
                                        </div>



                                        <div class="slider-btn">
                                            <button class="th-btn" data-delay=".8s"> Add Footer Address Details</button>
                                        </div>
                                    </div>

                                </form>

                            }

                        </div>


                    </div>
                </div>


            </section>
        </div>
    );
};

export default FooterContact;