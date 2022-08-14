import React from 'react'
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceDetails from '../SeviceDetails/ServiceDetails'

function Services() {
    const serviceData = [
        {
            image: fluoride,
            title: 'Fluoride Treatment'

        },
        {
            image: cavity,
            title: 'Cavity Filling'
        },
        {
            image: whitening,
            title: 'Teeth Whitening'
        }
    ]
    return (
        <section className='container mt-5'>
            <div className='text-center pt-5'>
                <h5 style={{ color: '#1CC7C1' }} className='pt-5'>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className='g-4 d-flex justify-content-around align-items-center'>
                <div className='row row-cols-sm-3 row-cols-1'>
                    {serviceData.map(service =>
                        <ServiceDetails service={service}></ServiceDetails>
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;