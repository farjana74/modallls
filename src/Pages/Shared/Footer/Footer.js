import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='container-fluid footer'>
            <div className='container footer-container py-5 '>
                <div className='row'>
                    <div className='col-lg-5  col-xs-12 text-white    '>
                        <h3 className=' footers-fonts text-decoration-underline'>About Us</h3>
                        <p className='footer-text mt-5'>
                            Techsist is an innovative and visionary firm that focuses in providing end to end comprehensive scope of various solutions and services in the IT, Business, Digital, Studio, Lifestyle and Events industry, along with a wide range of implementation, maintenance and outsourcing services for modern era technology project
                        </p>

                        <div className='py-3 py-sm-2'>
                            <a href="/#" target="_blank"> <i className="fab fa-facebook social-icon"></i></a>
                            <a href="/#" target="_blank"> <i className="fab fa-instagram-square social-icon"></i></a>
                            <a href="/#" target="_blank"><i className="fab fa-twitter social-icon"></i></a>
                            <a href="/#" target="_blank"><i className="fab fa-youtube social-icon"></i></a>
                        </div>

                    </div>
                    <div className='col-lg-3  col-xs-12  text-white '>
                        <h3 className=' footers-fonts text-decoration-underline mb-5  '>Quick Links</h3>
                        <h5 className='quick'>Home</h5>
                        <h5 className='quick'>Service</h5>
                        <h5 className='quick'>Solution</h5>
                        <h5 className='quick'>Products</h5>
                        <h5 className='quick'>Carrers</h5>
                        <h5 className='quick'>Contact</h5>

                    </div>
                    <div className=' footers-fonts col-lg-4 col-xs-12   text-white'>
                        <h3 className='text-decoration-underline mb-5'>Contact</h3>
                        <h5 className='level'>Level-4, House-546/2, Lane-13,
                            Baridhara DOHS, Dhaka-1206</h5>
                        <h5 className='level my-2'>techsistlimited@gmail.com</h5>
                        <h5 className='level mt-5'> +(880) 1777993895</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;