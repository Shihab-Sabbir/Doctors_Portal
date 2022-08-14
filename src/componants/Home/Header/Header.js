import React from 'react'
import BussinessInfo from '../BussinessInfo/BussinessInfo'
import HeaderMain from '../HeaderMain/HeaderMain'
import Navbar from '../Navbar/Navbar'
import './Header.css'
function Header() {

    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BussinessInfo>
            </BussinessInfo>
        </div>
    )
}

export default Header;