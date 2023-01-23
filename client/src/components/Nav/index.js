import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "./index.css"



// TODO: update placeholder links in nav bar
// TODO: Home, About, component not created yet...

function Nav(props) {

    const [currentComponent, setCurrentComponent] = useState('Hero')

    return (
        <header>
            <nav className='navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button navbar-custom-css'>
                <div className='conatiner-fluid container nav-container-custom-css'>
                    <div>
                    <h1>
                            {/* THIS TAKES THE USER TO THE LANDING PAGE AND DISPLAYS THE HERO */}
                            {currentComponent === 'Hero' ? (
                                <Link className='navbar-brand' style={{ color: 'rgb(255, 179, 0)' }} to='/'>
                                    Brick Street
                                </Link>
                            ) : (
                                <Link className='navbar-brand' style={{ background: 'transparent' }} to='/' onClick={() => {
                                    // console.log('onClick')
                                    setCurrentComponent('Hero')
                                    // props.setCurrentPage('Hero')
                                }}>
                                    Brick Street
                                </Link>
                            )}
                        </h1>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='row collapse navbar-collapse container-for-nav-links navMenu' id="navbarNav">
                        <ul className='col navbar-nav'>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THE HOME PAGE AND WILL DISPLAY ALL POSTS (ALECIA IS WORKING ON THIS PAGE/COMPONENT)
                                TODO: UPDATE THE HREF ONCE SHE FINISHES */}
                                {currentComponent === 'Home' ? (
                                    <Link className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} to='/home'>
                                        Home
                                    </Link>
                                ) : (
                                    <Link className='nav-link' style={{ background: 'transparent' }} to='/home' onClick={() => {
                                        // console.log('onClick')
                                        setCurrentComponent('Home')
                                        // props.setCurrentPage('Home')
                                    }}>
                                        Home
                                    </Link>
                                )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THE ABOUT PAGE (PABLO IS WORKING ON THIS PAGE/COMPONENT)
                                TODO: UPDATE THE HREF ONCE HE FINISHES  */}
                                {currentComponent === 'About' ? (
                                    <Link className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} to='/about'>
                                        About
                                    </Link>
                                ) : (
                                    <Link className='nav-link' style={{ background: 'transparent' }} to='/about' onClick={() => {
                                        setCurrentComponent('About')
                                        // props.setCurrentPage('About')
                                    }}>
                                        About
                                    </Link>
                                )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THE MESSAGES PAGE AND WILL DISPLAY ALL MESSAGES BETWEEN THE USER AND OTHER USERS (FIDEL IS GOING TO UPDATE THE PAGE/COMPONENT AND ALEX IS GOING TO INTEGRATE THE BACKEND WITH IT)
                                TODO: UPDATE THE HREF ONCE THEY FINISH */}
                                {currentComponent === 'MessagePage' ? (
                                    <Link className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} to='/messages'>
                                        Messages
                                    </Link>
                                ) : (
                                    <Link className='nav-link' style={{ background: 'transparent' }} to='/messages' onClick={() => {
                                        setCurrentComponent('MessagePage')
                                        // props.setCurrentPage('MessagePage')
                                    }}>
                                        Messages
                                    </Link>
                                )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THE POST PAGE SO THEY CAN CREATE A POST (ALECIA IS WORKING ON THIS PAGE/COMPONENT)
                                TODO: UPDATE THE HREF ONCE SHE FINISHES */}
                                {currentComponent === 'Post' ? (
                                    <Link className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} to='/post'>
                                        Post
                                    </Link>
                                ) : (
                                    <Link className='nav-link' style={{ background: 'transparent' }} to='/post' onClick={() => {
                                        setCurrentComponent('Post')
                                        // props.setCurrentPage('Post')
                                    }}>
                                        Post
                                    </Link>
                                )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THEIR DASHBOARD AND WILL DISPLAY ALL POSTS THAT BELONG TO THEM (JOSH IS WORKING ON THIS PAGE/COMPONENT)
                                TODO: UPDATE THE HREF ONCE HE FINISHES */}
                                {currentComponent === 'UserDashboard' ? (
                                    <Link className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} to='/dashboard'>
                                        Account
                                    </Link>
                                ) : (
                                    <Link className='nav-link' style={{ background: 'transparent' }} to='/dashboard' onClick={() => {
                                        setCurrentComponent('UserDashboard')
                                        // props.setCurrentPage('UserDashboard')
                                    }}>
                                        Account
                                    </Link>
                                )}
                            </li>
                        </ul>
                        <div className='col login-signup-mediaquery'>
                            <div className='ms-auto navbar-text actions login-signup-nav-links'>
                                <Link className='login nav-login-custom-css' to='/login'>
                                    Log In
                                </Link>
                                <button className="btn btn-moving-gradient btn-moving-gradient--orange">
                                    <Link className='register' to='/register'>Sign Up</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                     
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <h4 class="text-yellow h4">Collapsed content</h4>
                            <span class="text-muted">navbar brand-Toggleable.</span>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Nav;

