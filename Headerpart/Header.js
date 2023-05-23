import React from 'react'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div className='main'>

    <div className='head'>V-Ex Tech Solution</div>

    <div className='list'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </div>


    <div className='button-all'>
        <div className='butt1'>
        <Button variant="outline-success" style={{border:"none"}}>Signup</Button>
        </div>

        <div className='butt2'>
        <Button variant="outline-success">Signin</Button>
        </div>
    </div>
    
    </div>
  )
}

export default Header