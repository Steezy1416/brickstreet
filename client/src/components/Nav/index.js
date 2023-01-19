import React from 'react';
// TODO: update placeholder links in nav bar

function Nav() {
    return (
        <header>
            <nav className='navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button navbar-custom-css'>
                <div className='container nav-container-custom-css'>
                    <div>
                        <a className='navbar-brand' href='#home-placeholder-link'>
                            Brick Street
                        </a>
                    </div>
                    <div id='container-for-nav-links' className='row'>
                        <ul className='col navbar-nav nav-right'>
                            <li className='nav-item'>
                                <a className='nav-link nav-link-custom-css' href='/home'>
                                    Home
                                </a>
                            </li>
                            {/* TODO: add dropdown functionality to dropdown menu */}
                            <li className='nav-item dropdown'>
                                <a className='dropdown-toggle nav-link nav-link-custom-css' aria-expanded="false" data-bs-toggle="dropdown" href='#products-placeholder-link'>
                                    Products
                                </a>
                                <div className='dropdown-menu'>
                                    <a className='dropdown-item' href='#legosets-placeholder-link'>
                                        Lego Sets
                                    </a>
                                    <a className='dropdown-item' href='#placeholder-link'>
                                        Minifigures
                                    </a>
                                    <a className='dropdown-item' href='#cat3-placeholder-link'>
                                        Category 3
                                    </a>
                                    <a className='dropdown-item' href='#cat4-placeholder-link'>
                                        Category 4
                                    </a>
                                    <a className='dropdown-item' href='#cat5-placeholder-link'>
                                        Category 5
                                    </a>
                                </div>
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                <a className='nav-link' href='#about-placeholder-link'>
                                    About
                                </a>
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                <a className='nav-link' href='#faq-placeholder-link'>
                                    FAQ
                                </a>
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                <a className='nav-link' href='#contact-placeholder-link'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className='col'>
                            <p className='ms-auto navbar-text actions login-signup-nav-links'>
                                <a className='login nav-login-custom-css' href='#login-placeholder-link'>
                                    Log In
                                </a>
                                <button className="btn btn-moving-gradient btn-moving-gradient--orange">
                                     Sign Up 
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;