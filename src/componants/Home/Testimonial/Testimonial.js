import React from 'react'
import TestimonialCard from './TestimonialCard'
import image1 from '../../../assets/images/people1.png'
import image2 from '../../../assets/images/people2.png'
import image3 from '../../../assets/images/people3.png'
import './Testimonial.css'
function Testimonial() {
    const TestimonialData = [
        { image: image1, name: 'Winsen Herry' },
        { image: image2, name: 'Marry Garad' },
        { image: image3, name: 'Jossefe Learno' }
    ]
    return (
        <div className="container mt-5 mb-5 testimonials">
            <h5 className='text-info mb-3'>TESTIMONIAL</h5>
            <h1>What Our Patients Says</h1>
            <div className="row row-cols-sm-3 row-cols-1 g-4 mt-2">
                {
                    TestimonialData.map(data => <TestimonialCard data={data} />)
                }
            </div>
        </div>
    )
}

export default Testimonial