// import styles from './Landing.module.css'
import { Link, useNavigate } from 'react-router-dom';
import './Landing.css'
import React, { useState } from 'react'

const Landing = () => {

   const [ contactModal , setContactModal ] = useState ( false ) ;

   const toggleContactModal = () => {
      setContactModal ( prev => !prev ) ;
   }

   const navigate = useNavigate () ;
  return (
    <div className="body">
      <header>
        <div className="container">
            <nav>

                <div className="logo"> <i className='bx bx-pulse'></i>NITW D.</div>
                
                <button className="cta-button" onClick={toggleContactModal}>
                  {/* <span> login </span> */}
                  Login
                  </button>
                { contactModal && 
                <div className="modal">
                    <div className="modal-content">
                        <h1>Who are you ?</h1>
                        <span className="close" onClick={toggleContactModal}>&times;</span>
                           <button id="addContactButton" onClick = {() => navigate('/doctorAuth')}> Doctor </button>
                           <button id="addContactButton" onClick = {() => navigate('/patientAuth')}> Patient </button>
                     </div>
                   </div>
               }
               </nav>
         </div>
      </header>

    <main>
        <section id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Take care of your body and it will take care of you.</h1>
                        <p>Talk with our licensed online Consultants. Our line is open 24/7 at very cheap rates.</p>
                        <button  className="cta-button"><span href="../signinSignup/index.html">Book Your Appointment</span></button>
                    </div>
                    <div className="hero-image">
                        <img src="./dispensaryNITW.gif" alt="Doctors" />
                    </div>
                </div>
            </div>
        </section>

        <section id="features">
            <div className="container">
                <div className="section-title">
                    <h2>Why you should trust us?</h2>
                    <p>Get know about us</p>
                </div>
                <div className="feature-grid">
                    <div className="feature">
                        <i className="fas fa-user-md"></i>
                        <h3>All Specialist</h3>
                        <p>You can get all specialist doctors in our platform</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-lock"></i>
                        <h3>Private & Secure</h3>
                        <p>All your data is safe and secure with us</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-users"></i>
                        <h3>Million Customers</h3>
                        <p>We have served millions of satisfied customers</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-headset"></i>
                        <h3>24/7 Support</h3>
                        <p>Our support team is available round the clock</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="main-wrapper">
            <section className="banner">
                <div className="banner-content">
                    <h1>Latest News & Blog</h1>
                    <p>Stay informed with the latest medical updates and health tips.</p>
                </div>
                <div className="banner-image">
                    <img src="./dispensary.jpeg" alt="Doctor" />
                </div>
            </section>

            <section className="blog-section">
                <div className="blog-cards">
                    <div className="card">
                        <img src="Patient.jpeg" alt="Blog 1" />
                        <div className="card-content">
                            <h3>Elevating Patient Safety Through Technology</h3>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="medai.jpeg" alt="Blog 2" />
                        <div className="card-content">
                            <h3>Medical AI Ethics: Balancing Innovation and Care</h3>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="diet.jpeg" alt="Blog 3" />
                        <div className="card-content">
                            <h3>How Diet Impacts Mental Health: New Study</h3>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feedback-section">
                <h2>Students Feedback</h2>
                <div className="feedback-cards">
                    <div className="card feedback-card">
                        <img src="Patient1.jpeg" alt="Patient 1" />
                        <div>
                            <h4>Vivek kumar</h4>
                            <p>Great experience, very professional staff!</p>
                        </div>
                    </div>
                    <div className="card feedback-card">
                        <img src="Patient2.jpeg" alt="Patient 2" />
                        <div>
                            <h4>Nikhil Pandey</h4>
                            <p>Excellent care and attention to detail.</p>
                        </div>
                    </div>
                    <div className="card feedback-card">
                        <img src="Patient3.jpeg" alt="Patient 3" />
                        <div>
                            <h4>Senator Johnson</h4>
                            <p>Highly recommend this medical center!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    {/* <footer>
        Footer content
    </footer> */}
    </div>
  )
}

export default Landing
