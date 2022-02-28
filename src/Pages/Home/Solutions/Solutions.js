import React from 'react';
import "./Solutions.css";

const Solutions = ({ manages }) => {
    const { title, icon_url, description, service_sub_description } = manages
    // console.log(service_sub_description)

    return (
        <div className="col">
            <div className="card-secure p-3 ">
                <img src={icon_url} className="w-25 img-card  " alt="..." />
                <div className="">
                    <div className='cards-it
                    '><h5 className="cards-title text-wrap mt-3">{title}</h5></div>
                    <p className="cards-text pb-5 ">{description} off</p>

                    <div className='d-flex align-items-center '>

                        <div>
                            <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" href="/"> <h4 className='text-white know btn-modal text-decoration-underline'>Learn more</h4></a>

                        </div>
                        <div>
                            <i className="fas fa-angle-right text-white mx-1  fs-5 "></i>
                        </div>
                    </div>

                </div>
            </div>

            {/* modal -----------------------------------*/}

            <div className="modal fade modal-bg " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                            <button type="button" className="btn-close bg-light " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div className="modal-body text-white w-100 ">
                            <div className="container h-100">

                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    {
                                        service_sub_description?.map(subService => <div className="col">
                                            <div className="modals p-3 ">
                                                <img src={subService?.icon_url} className=" img-card " alt="..." />
                                                <div className="">
                                                    <h5 className="modals-text mt-3">{subService.title}</h5>
                                                    <p className="modal-descript ">{subService.description}</p>
                                                </div>
                                            </div>


                                        </div>
                                        )
                                    }


                                </div>


                            </div>
                        </div>



                    </div>
                </div>
            </div>







        </div>
    );
};

export default Solutions;