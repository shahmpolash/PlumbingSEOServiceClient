import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditFeaturesServicesText = () => {


    const [featuresone, setFeaturesText] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/featurestext/${id}`)
            .then((res) => res.json())
            .then((info) => setFeaturesText(info));
    }, []);



    const handleFeaturesTextSection = (event) => {
        event.preventDefault();
        const FeaturesText = event.target.FeaturesText.value;
        const FeaturesHeading = event.target.FeaturesHeading.value;
     

        const featureSection = {
            FeaturesText,
            FeaturesHeading,
            
        };

        const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/featurestext/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(featureSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Feature Text Is Updated');
            });
    };








    return (
        <> 
        <HeaderBottom></HeaderBottom>
        <section id="services" class="services-area pt-120 pb-90 fix mb-5">
        <div className='mt-5'>
            <div class="container">
                <div class="row">

                </div>
                <div class="row">

                    <div class="col-lg-8 col-md-12">

                        <h3> Update Features Text </h3>

                        <form class="contact-form " onSubmit={handleFeaturesTextSection}>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesText" defaultValue={featuresone.FeaturesText} placeholder="Features Text" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="FeaturesHeading" defaultValue={featuresone.FeaturesHeading} placeholder="Features Heading" required />
                                    </div>
                                </div>

                                <div class="slider-btn">
                                    <button class="th-btn" data-animation="fadeInRight" data-delay=".8s"> Update Features Text </button>
                                </div>
                            </div>

                        </form>



                    </div>


                </div>
            </div>


        </div>
    </section></>
       
    );
};

export default EditFeaturesServicesText;