import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateAboutSection = () => {

    const [about, setAbout] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/about-us/${id}`)
            .then((res) => res.json())
            .then((info) => setAbout(info));
    }, [id]);



    const handleAboutSection = (event) => {
        event.preventDefault();

        const aboutImgOne = event.target.aboutImgOne.value;
        const aboutImgTwo = event.target.aboutImgTwo.value;
        const aboutImgThree = event.target.aboutImgThree.value;
        const aboutText = event.target.aboutText.value;
        const aboutHeading = event.target.aboutHeading.value;
        const aboutDetails = event.target.aboutDetails.value;
        const aboutPointOne = event.target.aboutPointOne.value;
        const aboutPointTwo = event.target.aboutPointTwo.value;
        const aboutPointThree = event.target.aboutPointThree.value;
        const aboutPointFour = event.target.aboutPointFour.value;
        const callText = event.target.callText.value;
        const callNumber = event.target.callNumber.value;
        const buttonText = event.target.buttonText.value;
        const buttonLink = event.target.buttonLink.value;



        const aboutSection = {

            aboutImgOne,
            aboutImgTwo,
            aboutImgThree,
            aboutText,
            aboutHeading,
            aboutDetails,
            aboutPointOne,
            aboutPointTwo,
            aboutPointThree,
            aboutPointFour,
            callText,
            callNumber,
            buttonText,
            buttonLink,


        };

        const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/update-about/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(aboutSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('About is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2> Update About </h2>



                            <form class="contact-form " onSubmit={handleAboutSection}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImgOne" defaultValue={about.aboutImgOne} placeholder=" Image One" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImgTwo" defaultValue={about.aboutImgTwo} placeholder="Image Two" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutImgThree" defaultValue={about.aboutImgThree} placeholder="Image Three" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutText" defaultValue={about.aboutText} placeholder="About Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutHeading" defaultValue={about.aboutHeading} placeholder="About Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutDetails" defaultValue={about.aboutDetails} placeholder="About Details" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointOne" defaultValue={about.aboutPointOne} placeholder="About Point One" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointTwo" defaultValue={about.aboutPointTwo} placeholder="About Point Two" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointThree" defaultValue={about.aboutPointThree} placeholder="About Point Three" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="aboutPointFour" defaultValue={about.aboutPointFour} placeholder="About Point Four" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="callNumber" defaultValue={about.callNumber} placeholder="Your Number" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="callText" defaultValue={about.callText} placeholder="Call Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="buttonText" defaultValue={about.buttonText} placeholder="Button Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="buttonLink" defaultValue={about.buttonLink} placeholder="Button Link" required />
                                        </div>
                                    </div>



                                    <div class="slider-btn">
                                        <button class="th-btn" data-animation="fadeInRight" data-delay=".8s"> Update About </button>
                                    </div>
                                </div>

                            </form>



                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default UpdateAboutSection;