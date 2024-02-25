import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (


    <>
   

      <header className="th-header  header-layout2 header-absolute onepage-nav">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">

                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Main Menu */}
        <div className="sticky-wrapper">
          <div className="container th-container">
            <div className="menu-area">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  {
                    logo.map(l => <div className="header-logo mt-2">
                      <a href="/"><img src={l.logo} alt="Poolax" /></a>
                    </div>)
                  }

                </div>
                <div className="col-auto me-lg-auto">
                  <nav className="main-menu d-none d-lg-block">
                    <ul>
                      <li >
                        <a href="/">Home</a>

                      </li>
                      <li><a href="/#about-sec">About Us</a></li>
                      <li><a href="/#service-sec">Services</a></li>
                      <li><a href="/#pricing-sec">Pricing</a></li>
                      <li><a href="/contact">Contact Us</a></li>


                      {
                        user?.email ?
                          <li>
                            <Link to="/dashboard" class="" data-animation="fadeInRight" data-delay=".8s">Dashboard</Link>

                          </li>
                          :
                          <li><a href="/login" className="">
                            <i className="envy envy-user" />
                            Log in
                          </a></li>



                      }

                      {
                        users.map(u => u.userEmail === user?.email && u.userRole === 'Admin' &&

                          <li>  <Link to="/admin" className="">

                            Admin
                          </Link></li>

                        )

                      }




                    </ul>

                  </nav>

                </div>
                <div className="col-auto">
                  <div className="header-button">


                    <a href="/contact" className="th-btn border-radius">Contact Now
                    </a>
                    <button className="icon-btn th-menu-toggle d-inline-block d-lg-none"><i className="far fa-bars" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-shape" />
      </header>

    </>
  );
};

export default NavBar;
