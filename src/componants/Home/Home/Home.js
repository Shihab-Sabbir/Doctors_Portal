import React from 'react'
import AppointmentService from '../AppointmentService/AppointmentService'
import Doctor from '../Doctor/Doctor'
import FeatureService from '../FeatureService/FeatureService'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MainFooter from '../MainFooter/MainFooter'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'

function Home() {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
            <AppointmentService />
            <Testimonial />
            <Doctor />
            <Footer />
            <MainFooter />
        </div>
    )
}

export default Home