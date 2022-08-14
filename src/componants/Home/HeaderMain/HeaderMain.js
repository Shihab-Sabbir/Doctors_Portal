import React from 'react'
import chair from '../../../assets/images/chair.png'
function HeaderMain() {
    return (
        <main className='container' style={{ maxHeight: '600px' }}>
            <div className='d-flex justify-content-sm-center justify-content-start align-items-center mt-sm-5 mb-5 mb-sm-3 ps-sm-0'>
                <div className="row row-cols-sm-2 row-cols-1 flex-column-reverse flex-sm-row">
                    <div>
                        <h1>Your New Smile <br /> Starts Here</h1>
                        <p className='text-muted w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident laborum neque recusandae deleniti error.</p>
                        <button className='btn btn-info '>Get Appointment</button>
                    </div>
                    <div className="sm-mb-0 mb-1 mb-sm-5">
                        <img src={chair} className='img-fluid' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeaderMain