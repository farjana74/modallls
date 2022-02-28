import React from 'react';
import { useState, useEffect } from 'react';

const Practise = () => {
    const [pra, setPra] = useState([])
    useEffect(() => {
        fetch('https://digitalbackend.techsistltd.com/business_service_details/')
            .then(res => res.json())
            .then(data => setPra(data.data.service_description))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Practise;