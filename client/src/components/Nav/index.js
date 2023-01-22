import React, { useState } from 'react';



// TODO: update placeholder links in nav bar
// TODO: Home, About, component not created yet...

function Nav(props) {

    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <header>
            <nav className='navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button navbar-custom-css'>
                <div className='container nav-container-custom-css'>
                    <div>
                        <h1>
                            {/* THIS TAKES THE USER TO THE LANDING PAGE AND DISPLAYS THE HERO */}
                            <a className='navbar-brand' href='/'>
                                Brick Street
                            </a>
                        </h1>
                    </div>
                    
                    <div id='container-for-nav-links' className='row' >
                        <ul className='col navbar-nav'>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THE HOME PAGE AND WILL DISPLAY ALL POSTS (ALECIA IS WORKING ON THIS PAGE/COMPONENT)
                                TODO: UPDATE THE HREF ONCE SHE FINISHES */}
                            {currentComponent === 'Home' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='/home'>
                                    Home
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='/home' onClick={() => {
                                    setCurrentComponent('Home')
                                    props.setCurrentPage('Home')
                                }}>
                                    Home
                                </a>
                            )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THE MESSAGES PAGE AND WILL DISPLAY ALL MESSAGES BETWEEN THE USER AND OTHER USERS (FIDEL IS GOING TO UPDATE THE PAGE/COMPONENT AND ALEX IS GOING TO INTEGRATE THE BACKEND WITH IT)
                                TODO: UPDATE THE HREF ONCE THEY FINISH */}
                            {currentComponent === 'MessagePage' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='/messages'>
                                    Messages
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='/messages' onClick={() => {
                                    setCurrentComponent('MessagePage')
                                    props.setCurrentPage('MessagePage')
                                }}>
                                    Messages
                                </a>
                            )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THE POST PAGE SO THEY CAN CREATE A POST (ALECIA IS WORKING ON THIS PAGE/COMPONENT)
                                TODO: UPDATE THE HREF ONCE SHE FINISHES */}
                            {currentComponent === 'Post' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='/post'>
                                    Post
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='/post' onClick={() => {
                                    setCurrentComponent('Post')
                                    props.setCurrentPage('Post')
                                }}>
                                    Post
                                </a>
                            )}
                            </li>
                            <li className='nav-item nav-link-custom-css'>
                                {/* THIS NAV BAR LINK WILL TAKE THE USER TO THEIR DASHBOARD AND WILL DISPLAY ALL POSTS THAT BELONG TO THEM (JOSH IS WORKING ON THIS PAGE/COMPONENT)
                                TODO: UPDATE THE HREF ONCE HE FINISHES */}
                            {currentComponent === 'UserDashboard' ? (
                                <a className='nav-link' style={{ color: 'rgb(255, 179, 0)' }} href='/dashboard'>
                                    Account
                                </a>
                            ) : (
                                <a className='nav-link' style={{ background: 'transparent' }}href='/dashboard' onClick={() => {
                                    setCurrentComponent('UserDashboard')
                                    props.setCurrentPage('UserDashboard')
                                }}>
                                    Account
                                </a>
                            )}
                            </li>
                        </ul>
                        <div className='col'>
                            <p className='ms-auto navbar-text actions login-signup-nav-links'>
                                <a className='login nav-login-custom-css' href='/login'>
                                    Log In
                                </a>
                                <button className="btn btn-moving-gradient btn-moving-gradient--orange">
                                    <a className='register' href='/register'>Sign Up</a>
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
