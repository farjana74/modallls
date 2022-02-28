import React from 'react';
import "./Securitys.css"

const Securitys = ({ secures }) => {
    const { title, description, icon_url, service_sub_description, id } = secures;
    // console.log(secures)
    return (


        <div className="col">
            <div className="card-secure p-3 w-100 h-100 ">
                <img src={icon_url} className="w-25 img-card" alt="..." />
                <div className="">
                    <h5 className="cards-title text-wrap py-3">{title}</h5>
                    <div className='icons-url'>
                        <p className="  text-wrap ">{description}</p>
                    </div>

                    {/* <div className='d-flex align-items-center py-5 '>

                        <div className=''>
                            <a type="button" href="/"> <h4 className='text-white know btn-modal text-decoration-underline'>Learn more</h4></a>

                        </div>
                        <div>
                            <i className="fas fa-angle-right text-white mx-1 fs-5 "></i>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        // <div className="col">
        //     <div className="card-secure p-3 w-100 h-100 ">
        //         <img src={icon_url} className="w-25 img-card" alt="..." />
        //         <div className="">
        //             <h5 className="cards-title mt-3">{title}</h5>
        //             <p className="secures-text">{description}</p>

        //         </div>
        //         <div className="card-footer">
        //             <h4 className='text-white know text-decoration-underline '>know more<i className="fas fa-angle-right text-white mx-1 mb-2 fs-5 "></i></h4>
        //         </div>
        //         {/* <div className='d-flex align-items-center '>
        //             <h4 className='text-white know text-decoration-underline '>know more<i className="fas fa-angle-right text-white mx-1 mb-2 fs-5 "></i></h4>

        //         </div> */}
        //     </div>

        // </div>
    );
};

export default Securitys;