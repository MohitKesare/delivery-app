import '../../components/Footer/Footer.css'
import React from 'react'
import fblogo from '../../assets/fblogo.png'
import instalogo from '../../assets/instalogo.png'
import twitterlogo from '../../assets/twitterlogo.png'
import linkedinlogo from '../../assets/linkedinlogo.png'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='left'>
                    <h3>
                        Logis
                    </h3>
                    <p>
                        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                    </p>
                    <div className='logos'>
                        {/* <img src={twitterlogo} /> */}
                        <img src={fblogo} className='img' />
                        <img src={instalogo} className='img' />
                        <img src={linkedinlogo} className='img' />
                    </div>
                </div>
                <div className='right'>
                    <div className='upperright'>
                        <div className='usefullinks'>
                            <h6>
                                Useful Links
                            </h6>
                            <ol>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Tems and Services</li>
                                <li>Privacy Policy</li>
                            </ol>
                        </div>
                        <div className='ourservices'>
                            <h6>
                                Our Services
                            </h6>
                            <ol>
                                <li>Web Design</li>
                                <li>Web Development</li>
                                <li>Product Management</li>
                                <li>Marketing</li>
                                <li> Graphic Design</li>
                            </ol>
                        </div>
                        <div className='contactus'>
                            <h6>
                                Contact Us
                            </h6>
                            <p>A108 Adam Street
                                New York, NY 535022
                                United States</p>
                            <span>Phone: +1 5589 55488 55
                                Email: info@example.com</span>
                        </div>
                    </div>
                    <div className='lowerright'>
                   <p> © Copyright Logis. All Rights Reserved </p>
<p>Designed by Mohit Arvind Kesare</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
