import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
    {
        title: 'Openning Hours',
        description: 'We are open 7days',
        icon: faClock,
        background: '#20c997'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyne, New work',
        icon: faMarker,
        background: '#3A4256'
    },
    {
        title: 'Call Us Now',
        description: '+154833412',
        icon: faPhone,
        background: '#20c997'
    }];
function BussinessInfo() {
    return (
        <section className='container d-flex align-items-center justify-content-between mb-0'> <div className='row-cols-sm-3 row-cols-1 row ms-sm-5 ps-sm-3'>
            {infoData.map(info =>
                <InfoCard info={info}></InfoCard>
            )
            }
        </div>
        </section>
    )
}

export default BussinessInfo;