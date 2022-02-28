import React from 'react';
import { useState, useEffect } from 'react';

import "./Banner.css"

const Banner = () => {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch('https://digitalbackend.techsistltd.com/it_service_details/')
            .then(res => res.json())
            .then(data => setBanner(data.data))
    }, [])
    return (
        <div className='container-fluid banner'>
            <div className='banner-text'>
                <h2 className='text'>Event Services</h2>
            </div>
        </div>
    );
};

export default Banner;