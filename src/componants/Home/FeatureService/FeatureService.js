import React from 'react'
import treatment from '../../../assets/images/treatment.png'
function FeatureService() {
    var newStyle = { textAlign: 'justify' }
    return (
        <div className='container mt-5 mb-5 d-flex justify-content- align-items-center'>
            <div className='m-auto'>
                <div className="row row-cols-sm-2 row-cols-1 g-0">
                    <div>
                        <img src={treatment} className='img-fluid w-100 p-5' />
                    </div>
                    <div className='d-flex flex-column justify-content-around text-center text-sm-start'>
                        <div>
                            <h2 >Exceptional Dental Care,on Your Term </h2>
                        </div>
                        <div>
                            <p className='text-muted alignment' style={newStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vitae, ipsa eaque libero, omnis nobis, iusto reiciendis totam quia voluptatum esse tempore quis accusantium? Quo, voluptates doloremque obcaecati iure reiciendis nam illo quos unde eaque debitis tempora tempore ut quis. Saepe consequatur alias perferendis necessitatibus sed, voluptates iste sit voluptatem.
                            </p>
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

export default FeatureService;