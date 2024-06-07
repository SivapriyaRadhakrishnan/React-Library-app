import React from 'react'
import NavBar from './NavBar'

const DeleteBokk = () => {
  return (
    <div>
        <NavBar/>
         <div className="continer">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Book Title</label>
                    <input type="text" className="form-control" />
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBokk