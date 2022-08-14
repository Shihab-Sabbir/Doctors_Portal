import React from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function DoctorCard({ data }) {

  return (
    <div className="col col-md-4 mt-5 mb-5">
      <div className="card mt-5">
        <img src={data.image} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title text-center">{data.name}</h5>
          <p className="card-text text-center"><FontAwesomeIcon icon={faPhone} style={{ color: '#1CC1C7' }} />{data.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard