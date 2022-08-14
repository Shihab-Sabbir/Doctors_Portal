import React from 'react'
import './Appointment.css'
import doctor from '../../../assets/images/doctor.png'
function AppointmentService() {
    return (
        <div className="container appointment  mb-5">
            <div className="row row-cols-sm-2 row-cols-1">
                <div className="">
                    <div className="doctor">
                        <img src={doctor} />
                    </div>
                </div>
                <div className="">
                    <div className='info'>
                        <div>
                            <small className='text-info'>APPOINTMENT</small>
                        </div>
                        <div>
                            <h3>Make an appointment Today</h3>
                        </div>
                        <div>
                            <small>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam assumenda ducimus quidem iure illo doloribus officiis. Obcaecati, fuga earum. Impedit.
                            </small>
                        </div>
                        <div>
                            <button className='btn btn-info mt-2'>Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppointmentService