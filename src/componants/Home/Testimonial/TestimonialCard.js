import React from 'react'

function TestimonialCard({ data }) {
    return (
        <div className="col col-md-4 mt-5">
            <div className="card mt-5">
                <div className="card-header mb-4 mt-4 bg-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus incidunt saepe aspernatur reiciendis in ea amet dignissimos, itaque tempora autem, assumenda excepturi consequuntur tempore fuga, eius illum asperiores placeat.
                </div>
                <ul className="row p-2 row-cols-sm-2 row-cols-1">
                    <div className="image-holder">
                        <li className="list-group-item">
                            <img src={data.image} className='img-fluid' />
                        </li>
                    </div>
                    <div className="g-0">
                        <li className="list-group-item  fw-bold text-info" style={{ textAlign: 'center' }}>{data.name}</li>
                        <li className="list-group-item text-muted fw-bold" style={{ textAlign: 'center' }}>Washington DC</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default TestimonialCard;