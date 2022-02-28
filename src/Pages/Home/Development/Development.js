import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Developments from '../Developments/Developments';
import "./Development.css"

const Development = () => {
    const [develop, setDevelop] = useState([]);

    useEffect(() => {
        fetch('https://digitalbackend.techsistltd.com/event_service_details/')
            .then(res => res.json())
            .then(data => setDevelop(data.data.service_description))
    }, [])
    return (
        <div className='container my-5'>
            <h2 className='digital-text'>Event Services</h2>
            <hr />
            <br />
            <br />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                {
                    develop.map(develops => <Developments
                        key={develops.id}
                        develops={develops}
                        develop={develop}
                    ></Developments>)
                }





            </div>

        </div>
    );
};

export default Development;