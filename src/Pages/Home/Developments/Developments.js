import React from 'react';
import "./Developments.css";
import { useState, useEffect } from 'react';
import ModalCard from '../ModalCard/ModalCard';
import ServiceHolder from '../ServiceHolder/ServiceHolder';

const Developments = ({ develops, develop }) => {
    const { title, description, icon_url, id, service_sub_description } = develops;
    const [subSer, setSubSer] = useState([]);
    // const [dataId, setDataId] = useState(null)
    // const [data, setData] = ({})
    // console.log(subSer);
    // console.log(dataId);


    const filterService = (id) => {
        let url = `https://digitalbackend.techsistltd.com/service_sub_description/${id}/`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSubSer(data.data))
        // const subService = develop.filter(subSr => id === subSr.id)
        // console.log(subService)
        // setSubSer(subService);
    }







    return (
        <div className="col">
            <div className="card-secure p-3 ">
                <img src={icon_url} className="w-25  img-card " alt="..." />
                <div className="">
                    <div className='cards-it
                    '><h5 className="cards-title text-wrap mt-3">{title}</h5></div>
                    <p className="cards-text ">{description}</p>
                    <div className='d-flex align-items-center pt-4 '>

                        <div>
                            <a type="button" data-bs-toggle="modal" data-bs-target="#example" href="/"> <h4 className='text-white know btn-modal text-decoration-underline' onClick={() => filterService(id)}>Learn more</h4></a>

                        </div>
                        <div>
                            <i className="fas fa-angle-right text-white mx-1  fs-5 "></i>
                        </div>
                    </div>



                </div>
            </div>


            <div className="modal fade modal-bg " id="example" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                            <button type="button" className="btn-close bg-light " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div className="modal-body text-white w-100 ">
                            <div className="container h-100">

                                {
                                    // subSer?.map(datas => <ServiceHolder
                                    //     datas={datas}

                                    // ></ServiceHolder>)
                                    <ServiceHolder subSer={subSer}></ServiceHolder>

                                }
                            </div>
                        </div>



                    </div>
                </div>
            </div>




        </div>
    );
};

export default Developments;