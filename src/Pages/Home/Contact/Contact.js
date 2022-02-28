import React from 'react';
import "./Contact.css;"

const Contact = () => {
    return (
        <div className='container py-3 contact'>
            <div className='row '>
                <div className='col-md-5'>
                    <h2 className='text-white colaborate'>Let's Collaborate and</h2>
                    <h2 className='colaborate'>Build Something Great</h2>
                </div>
                <div className='col-md-5'>
                    <button className='p-2'>Contact Us  <i className="fas fa-angle-right text-white text-center mx-1 fs-5 "></i> </button>

                </div>

            </div>

        </div>
    );
};

export default Contact;
