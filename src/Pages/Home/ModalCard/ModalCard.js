import React from 'react';
import { useState } from 'react'
const ModalCard = ({ service }) => {
    const { icon_url, title, description, id } = service;
    // const [data, setData] = useState(service)
    console.log(service.id)
    // console.log(id)

    return (
        <div className="col">
            <div className="modals p-3 ">
                <img src={icon_url} className=" img-card " alt="..." />
                <h3>{id}</h3>
                <div className="">
                    {/* <h5 className="modals-text mt-3">{id}</h5> */}
                    <h5 className="modals-text mt-3">{title}</h5>
                    <p className="modal-descript ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;