import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Solutions from '../Solutions/Solutions';
import "./Solution.css"

const Solution = () => {
    const [manage, setManage] = useState([])
    // console.log(manage)
    useEffect(() => {
        fetch('https://digitalbackend.techsistltd.com/it_service_details/')
            .then(res => res.json())
            .then(data => setManage(data.data.service_description))
    }, [])
    return (
        <div className='container my-5'>
            <h2 className='digital-text'>Digital TEchnologies & Solutions</h2>
            <hr />
            <br />
            <br />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                {
                    manage.map(manages => <Solutions
                        manages={manages}

                    ></Solutions>)
                }





            </div>

        </div>
    );
};

export default Solution;