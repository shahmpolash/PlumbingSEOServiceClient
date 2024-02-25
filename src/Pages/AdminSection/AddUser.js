import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const AddUser = () => {
const navigate = useNavigate();
const [users, setUsers] = useState([]);
 
useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/users`)
        .then((res) => res.json())
        .then((info) => setUsers(info.reverse())); // Reverse the array initially
}, []);

    const handleUser = (event) => {
        event.preventDefault();
        const userEmail = event.target.userEmail.value;
        const userRole = event.target.userRole.value;



        const userAdded = {
            userEmail,
            userRole


        };

        const url = `https://plumbingseoservice-e14c7ccb325f.herokuapp.com/add-user`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userAdded),
        })
            .then((res) => res.json())
            .then((result) => {
                 navigate('/admin');
                alert('User Is Added');
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
                            <h3> Add Admin User Email </h3>

                            

                                <form class="contact-form " onSubmit={handleUser}>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="userEmail" placeholder="User Email" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input class="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" hidden name="userRole" defaultValue='Admin' placeholder="User Role" required />
                                            </div>
                                        </div>
                                        <div class="slider-btn ">
                                            <button class="th-btn" data-animation="fadeInRight" data-delay=".8s"> Add User </button>

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

export default AddUser;