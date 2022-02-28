import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Securitys from '../Securitys/Securitys';
import "./Security.css"


const Security = () => {
    const [secure, setSecure] = useState([])
    useEffect(() => {
        fetch('https://digitalbackend.techsistltd.com/digital_service_details/')
            .then(res => res.json())
            .then(data => setSecure(data.data.service_description))
    }, [])


    return (
        <div className='container my-5'>
            <h2 className='digital-text'>Network & data security</h2>
            <hr />
            <br />
            <br />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                {
                    secure.map(secures => <Securitys
                        secures={secures}
                    ></Securitys>)
                }




            </div>

        </div>
    );
};

export default Security;