import React from 'react'
import './Footer.css'
function Footer() {

    return (
        <div className="container-fluid mt-5 px-5 bg">
            <div className="text-center">
                <h2 className='text-info pt-5'>Always Stay With Us</h2>
            </div>
            <form className='px-sm-5 py-3'>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email address *' />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Subject *' />
                </div>
                <div className="mb-3">
                    <textarea name="" id="" rows="10" className='rounded' placeholder='  Message *' style={{ width: '100%' }}></textarea>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <button type="submit" className="btn btn-info text-white fw-bold">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Footer