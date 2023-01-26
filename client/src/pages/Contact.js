import React from 'react';

const Contact = () => (
  <div>
    <h2>Contact Us!</h2>
    <p>At Brick Street, we value your feedback and are dedicated to providing you with the best service possible. If you have any questions, comments, or concerns, please do not hesitate to contact us.</p>
    <dl>
      <dd>-Phone: 832-112-5677</dd>
      <dd>-Email: info@BrickStreet.com</dd>
      <dd>-Address: 123 Main St, Houston TX 77475</dd>
    </dl>
    <h6> Or use the contact from below:</h6>
    <div className="row d-flex ">
      <div className="col-md-5 col-xl-4">
        <div className="card mb-5">
          <div className="card-body d-flex flex-column align-items-center">
            <form className="text-center" method="post">
              <div className="mb-3">
                <div className="container">

                  <div className="row">
                    <label className="mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="col-12 mb-3"
                    />
                    <label className="mb-2">Email</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="col-12 mb-3"
                    />
                    <label className="mb-2">Phone</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="col-12 mb-3"
                    />

                    <label className="mb-2">Message</label>
                    <textarea
                      className="col-12 mb-3"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <button className="btn btn-moving-gradient btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <h5> Thank you for choosing Brick Street!</h5>
    <div className="container py-4 py-xl-5">
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className='developerName'>Our Team</h2>
          <p className="w-lg-50">Brick Street was made with ❤️ by </p>
        </div>
      </div>
      <div className="row gy-4 row-cols-2 row-cols-md-3 justify-content-center">
        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt='' />
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Alecia Maragh</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="text-muted card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/amaragh">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#6c757d" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt=''/>
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Alex Fortin</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="text-muted card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/Steezy1416">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#6c757d" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt=''/>
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Fidel Deaquino</strong></h5>
              <a className='clickHere-Portfolio' href='https://fdeaquino.github.io/react-portfolio/'><p className="text-muted card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/fdeaquino">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#6c757d" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt=''/>
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Pablo Ramirez</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="text-muted card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/graslowsnail">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#6c757d" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none">
            <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt=''/>
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Josh Thomas</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="text-muted card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/Josh236061">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#6c757d" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
