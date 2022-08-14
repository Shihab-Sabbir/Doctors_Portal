import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './BussInfo.css'
function InfoCard({ info }) {
    return (
        <div className='sm-mb-5 mt-0 p-1 mt-sm-5'>
            <div className="d-flex align-items-center p-2 px-4 justify-content-center rounded text-white item" style={{ backgroundColor: `${info.background}`, width: '250px' }}>
                <div className='me-3' style={{ fontSize: '30px' }}><FontAwesomeIcon icon={info.icon} /></div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;