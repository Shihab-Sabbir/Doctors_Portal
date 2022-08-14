import React from 'react'
import DoctorCard from './DoctorCard'
import doctor_img from '../../../assets/images/doctor-small.png'

function Doctor() {
    const DoctorData = [
        { image: doctor_img, name: 'M.R Khan', phone: '   +8542214' },
        { image: doctor_img, name: 'Golam Rabbi', phone: '  +8542278' },
        { image: doctor_img, name: 'Helal Uddin', phone: '  +8542521' }
    ]
    return (
        <div className="container mt-5 mb-5 ">
            <h3 className='text-info mb-3 text-center'>Our Doctors</h3>
            <div className="row row-cols-sm-3 row-cols-1 g-4 mt-2">
                {
                    DoctorData.map(data => <DoctorCard data={data} />)
                }
            </div>
        </div>
    )
}

export default Doctor;