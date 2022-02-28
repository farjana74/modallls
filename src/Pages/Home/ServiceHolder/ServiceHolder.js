import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ModalCard from '../ModalCard/ModalCard';

const ServiceHolder = ({ subSer }) => {

    // const { title, description, icon_url, id, service_sub_description } = datas;
    // const { subSer } = props
    // console.log(subSer)
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

            {
                subSer?.map(service => <ModalCard
                    service={service}
                    id={service.id}

                ></ModalCard>)
            }
            {/* {
                subSer?.map(service => <h1>{service.title}</h1>)
            } */}

        </div>
    );
};

export default ServiceHolder;