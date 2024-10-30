
import React from 'react'

import { useNavigate } from 'react-router-dom'
export default function Nav() {
    const navigate = useNavigate();
    const handle = () =>{
        navigate(`/Invoice`)
    }
    return (
        <div>
            <nav className="navbar bg-body-tertiary fixed-top">
                
                        {/* <NavLink to='/Invoice'>Invoice Details</NavLink> */}
                <button className='btn btn-primary' onClick={handle}>Invoices</button>
                    
                
            </nav>
        </div>
    )
}
