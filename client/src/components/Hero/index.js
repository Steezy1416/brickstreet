import React from 'react';
// TODO: update placeholder links in nav bar

function Hero() {
    return (
        <>
            <section>
                <div className="container hero-container-custom-css border border-0 d-flex flex-column justify-content-center">
                    <div className="align-items-center">
                        <div className="row p-4 py-5 hero-items-styles">
                            <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                                <div>
                                    <h1 className="hero-text-styles text-uppercase fw-bold mb-3">Rediscover the fun of building with Brick Street</h1>


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
            <section className="text-center bg-light features-icons py-4 border border-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div className="d-flex features-icons-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor" className="m-auto mb-2 dark bi bi-bag-heart" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                    </svg>
                                </div>
                                <h3 className='buySellConnectTitle'>Buy</h3>
                                <p className="lead mb-0 buySellConnectParagraph">Add to your collection by purchasing from Lego fans</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div className="d-flex features-icons-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor" class="m-auto mb-2 dark bi bi-cash-stack" viewBox="0 0 16 16">
                                        <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                        <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                                    </svg>
                                </div>
                                <h3 className='buySellConnectTitle'>Sell</h3>
                                <p className="lead mb-0 buySellConnectParagraph">Part with old Lego sets while making space for new sets</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                                <div className="d-flex features-icons-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" fill="currentColor" class="m-auto mb-2 dark bi bi-people-fill" viewBox="0 0 16 16">
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                    </svg>
                                </div>
                                <h3 className='buySellConnectTitle'>Connect</h3>
                                <p className="lead mb-0 buySellConnectParagraph">Join a community of other Lego enthusiasts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center bg-secondary features-icons showcase border border-0">
                <div className="container-fluid p-0">
                    {/* TODO: If we decide to have an external link to this photo, add the class 'row-reverse' to the div below */}
                    <div className="row g-0">
                        <div className="col-lg-6 text-white order-lg-2 showcase-img legoCommunityMeetUpPhoto"><span></span></div>
                        <div className="col-lg-6 my-auto order-lg-1 showcase-text py-4">
                            <h2 className='eventTitles'>Join The Fun At Our Next Community Meet Up</h2>
                            <p className="lead mb-0 m-sm-2 m-md-2 m-lg-3 eventsParagraph"><u>February 1st</u><br/>Lego Coffee Shop<br/>1000 Main St<br/>7:00 PM</p>
                        </div>
                    </div>
                    <div className="row g-0">
                    <a href="https://www.brickfestlive.com/bfl-2022-2023" className='col-lg-6'><div className="text-white order-lg-2 showcase-img brickConPhoto"><span></span></div></a>
                        <div className="col-lg-6 my-auto order-lg-1 showcase-text py-4">
                            <h2><a className='eventTitles' href='https://www.brickfestlive.com/bfl-2022-2023'>Brick Fest Tour</a></h2>
                            <p className="lead mb-0 m-sm-2 m-md-2 m-lg-3 eventsParagraph"><u>February 4th - 5th</u><br/>Houston, TX<br/><br></br>Explore the many hands-on activities and exhibits that have been curated for maximum family entertainment.<br/><br/><a className='clickHere' href='https://www.brickfestlive.com/bfl-2022-2023#section-2152410000-135-167-189'><strong>More Tour Dates</strong></a><br/></p>
                        </div>
                    </div>
                    <div className="row g-0 row-reverse">
                    <a href="https://brickcon.org/" className='col-lg-6'><div className="text-white order-lg-2 showcase-img brickFestPhoto"><span></span></div></a>
                        <div className="col-lg-6 my-auto order-lg-1 showcase-text py-4">
                            <h2><a className='eventTitles' href='https://brickcon.org/'>BrickCon 2023</a></h2>
                            <p className="lead mb-0 m-sm-2 m-md-2 m-lg-3 eventsParagraph"><u>September 7th -10th</u><br/>Bellevue, WA<br/><br></br>This year Lego hobbyists will convene at Meydenbauer Center.<br/><br/>Private Convention for Adult Fans of Lego (AFOL) also available by clicking <a className='clickHere' href='https://afol.brickcon.org/'><strong>here</strong></a>.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;