import '../../components/Navbar/Navbar.css'
import React from 'react'
import deliverylogo from '../../assets/deliverylogo.jpg'
import bgimage from "../../assets/bgimage.jpg"
import heroimg from '../../assets/heroimg.svg'

const Navbar = () => {
    return (
        <div className='main-container'>
            <nav class="navbar navbar-expand-lg bg-dark" id='navbar'>
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active text-white bg-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white bg-dark" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white bg-dark" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white bg-dark" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white bg-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white bg-dark" href="#">Contact</a>
                            </li>

                            <button type="button" class="btn btn-primary btn-sm " id='button'>Get A Quote</button>

                        </ul>
                        <nav class="navbar bg-dark" id='logo'>
                            <div class="container-fluid justify-content-end" id='float-right'>
                                <a class="navbar-brand flex" href="#">
                                    <img src={deliverylogo} alt=""  class="d-inline-block align-text-top " />
                                    <h6 className='text-white bg-dark'>Delivery Prime</h6>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
            <div className='mid-content' >
                <img src={bgimage} alt="" />
            </div>
            <div className='svg'>
                <img src={heroimg} />
            </div>
            <div className='quote'>
                <strong>Your Lightening Fast </strong>
                <p>    Delivery Partner</p>
                <div className='lorem'>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas quasi est suscipit numquam possimus, maxime repellat recusandae maiores perspiciatis nam earum ex modi culpa? maiores perspiciatis nam earum ex modi culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div class="input-group mb-4 my-4" id='input-id'>
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
                <div className='info'>
                    <div className='first'>
                        <span className='just-number'>232</span>
                        <div>
                        <hr className='aline'/>
                        </div>
                        <span className='just-name'>Clients</span>
                    </div>
                    <div className='first'>
                        <span className='just-number'>521</span>
                        <div>
                        <hr className='aline'/>
                        </div>
                        <span className='just-name'>Projects</span>
                    </div>
                    <div className='first'>
                        <span className='just-number'>1453</span>
                        <div>
                        <hr className='aline'/>
                        </div>
                        <span className='just-name'>Support</span>
                    </div>
                    <div className='first'>
                        <span className='just-number'>32</span>
                        <div>
                        <hr className='aline'/>
                        </div>
                        <span className='just-name'>Workers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
