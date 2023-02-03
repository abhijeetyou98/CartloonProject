import React from 'react';
import * as icon from 'react-bootstrap-icons';

const Afooter = () => {
  return (
    
  
<footer id="footer">
    <div className="footer-newsletter">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4">
                    <form action="" method="post"> <input type="email" name="email"
                            placeholder="Enter your email-I here"></input><input type="submit" value="Subscribe"></input>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="aboutus.html">About us</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="service.html">Services</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="terms.html">Privacy policy</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><i className="bx bx-chevron-right"></i> <a
                                href="https://wa.me/918080566158?text=Hi%2C%20I%20am%20Interested....">Event
                                organizer</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a
                                href="https://wa.me/918080566158?text=Hi%2C%20I%20am%20Interested....">Event
                                decoration</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a
                                href="https://wa.me/919137207397?text=Hi%2C%20I%20am%20Interested....">Web
                                Design</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a
                                href="https://wa.me/919137207397?text=Hi%2C%20I%20am%20Interested....">Web
                                Development</a></li>

                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 footer-contact">
                    <h4>Contact Us</h4>
                    <p> Lokhandwala,Kandivali East <b/> Mumbai-400101<br/> Maharastra <br/>
                        <strong>Phone:</strong><br/>
                        +918080566158<br/> <strong>Email:</strong><br/>
                        <a href="mailto:help@cartloon.com">help@cartloon.com</a><br/>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 footer-contact">
                    <h4>About Cartloon</h4>
                    <p>We Provide Ballon Decoration Service in Mumbai for Birthday Party,Anniversary,Baby
                        Shower,Surprise Decoration and Many more.</p>
                    <div className="social-links mt-3">
                        <a href="https://www.instagram.com/cartloonevent/?hl=en"><i><icon.Instagram/></i></a>
                        <a href="https://wa.me/919653624838?text=Hi%2C%20I%20am%20Interested...."><i><icon.Whatsapp/></i></a>
                        <a href="https://www.facebook.com/cartloonevent/" ><i><icon.Facebook/></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright"> &copy; Copyright <strong><span>Cartloon.com</span></strong>. All Rights
            Reserved </div>
        <div className="credits"> Designed by <a
                href="https://wa.me/919137207397?text=Hi%2C%20I%20am%20Interested....">Abhijeet Chauhan</a>
        </div>
    </div>
</footer>
  )
}

export default Afooter;
