import React from 'react'
function ServiceDetails({ service }) {

    return (
        <div className='mb-5 mt-5 d-flex flex-column align-items-center p-2 justify-content-center'>
            <div className='d-flex justify-content-center'>
                <img className='img-fluid mb-3' src={service.image} />
            </div>
            <div className='text-center'>
                <h6>{service.title}</h6>
                <small className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, ad.</small>
            </div>
        </div>


    )
}

export default ServiceDetails;