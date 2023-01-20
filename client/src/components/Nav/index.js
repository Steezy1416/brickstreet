import React, { useState } from 'react';



// TODO: update placeholder links in nav bar
// TODO: Home, About, component not created yet...

function Nav(props) {

    const [currentComponent, setCurrentComponent] = useState('MessagePage')

    return (
        <header>
            <nav className='navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button navbar-custom-css'>
                <div className='container nav-container-custom-css'>
                    <div>
                        <h1>
                            <a className='navbar-brand' href='#home-placeholder-link'>
                                Brick Street
                            </a>
                        </h1>
                    </div>
                    
                    <div id='container-for-nav-links' className='row' >
                        <ul className='col navbar-nav'>
                            <li className='nav-item nav-link-custom-css'>
                            {currentComponent === 'Home' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='#home-placeholder-link'>
                                    Home
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='#home-placeholder-link' onClick={() => {
                                    setCurrentComponent('Home')
                                    props.setCurrentPage('Home')
                                }}>
                                    Home
                                </a>
                            )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                            {currentComponent === 'About' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='#about-placeholder-link'>
                                    About
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='#about-placeholder-link' onClick={() => {
                                    setCurrentComponent('About')
                                    props.setCurrentPage('About')
                                }}>
                                    About
                                </a>
                            )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                            {currentComponent === 'MessagePage' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='#messagepage-placeholder-link'>
                                    Messages
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='#messagepage-placeholder-link' onClick={() => {
                                    setCurrentComponent('MessagePage')
                                    props.setCurrentPage('MessagePage')
                                }}>
                                    Messages
                                </a>
                            )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                            {currentComponent === 'Post' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='#post-placeholder-link'>
                                    Post
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='#post-placeholder-link' onClick={() => {
                                    setCurrentComponent('Post')
                                    props.setCurrentPage('Post')
                                }}>
                                    Post
                                </a>
                            )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                            {currentComponent === 'Account' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='#account-placeholder-link'>
                                    Account
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='#account-placeholder-link' onClick={() => {
                                    setCurrentComponent('Account')
                                    props.setCurrentPage('Account')
                                }}>
                                    Account
                                </a>
                            )}
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