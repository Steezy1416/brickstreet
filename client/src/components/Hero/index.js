import React from 'react';
// TODO: update placeholder links in nav bar

function Hero() {
    return (
        <section className="py-4 py-xl-5">
            <div className="container">
                <div className="hero-container-custom-css border rounded border-0 d-flex flex-column justify-content-center align-items-center">
                    <div className="row p-4 py-5 hero-items-styles">
                        <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                            <div>
                                <h1 className="hero-text-styles text-uppercase fw-bold mb-3">Rediscover the fun of building with Brick Street</h1>
                                <p className="hero-text-styles mb-4">Buy and Sell Legos<br />Connect with Lego Enthusiasts</p>

                                <button className="btn fs-5 me-2 py-2 px-4 btn-moving-gradient btn-moving-gradient--black">
                                <a className='login' href='/login'>Log In</a>
                                </button>
                                <button className="btn fs-5 me-2 py-2 px-4 btn-moving-gradient btn-moving-gradient--orange">
                                    <a className='register' href='/register'>Sign Up</a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;