import React from 'react';

const Contact = () => (
  <section>
    <div className="position-relative py-4 py-xl-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className='msg-pg-title'>Contact Us!</h2>
            <p className="w-lg-50 msg-body">At Brick Street, we value your feedback and are dedicated to providing you with the best service possible. If you have any questions, comments, or concerns, please do not hesitate to contact us.</p>
            {/* <dl>
              <p className='msg-body'>Phone: 832-112-5677</p>
              <p className='msg-body'>Email: info@BrickStreet.com</p>
              <p className='msg-body'>Address: 123 Main St, Houston TX 77475</p>
            </dl> */}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div className="card mb-5">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="bs-icon-xl bs-icon-circle bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                </svg></div>
                <p className="msg-body text-center">Please fill out this form if you would like to contact us.</p>
                <form className="text-center" method="post">

                  <div className="mb-3"><input id='name-1' className="form-control" type="text" name="name" placeholder="Name" /></div>
                  <div className="mb-3"><input id='email-1' className="form-control" type="email" name="email" placeholder="Email" /></div>
                  <div className="mb-3"><input id='phone-1' className="form-control" type="tel" name="phone" placeholder="Phone" /></div>
                  <textarea id="message-1" class="mb-3 form-control" name="message" rows="6" placeholder="Message"></textarea>
                  <div className="my-3"><button className="btn btn-moving-gradient btn-dark d-block w-100" type="submit">Send</button></div>
                  {/* TODO: work with back end to update password */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="container py-4 py-xl-5 bg-light">
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className='developerName'>Meet Our Team</h2>
          <p className="w-lg-50">Brick Street was made with ❤️ by </p>
        </div>
      </div>
      <div className="row gy-4 row-cols-2 row-cols-md-3 justify-content-center">
        <div className="col">
          <div className="card border-0 shadow-none bg-secondary cardHeightForTeam">
            <div className="card-body py-3 text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt='' />
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Alecia Maragh</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/amaragh">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#343a40" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none bg-secondary cardHeightForTeam">
            <div className="card-body py-3 text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt='' />
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Alex Fortin</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/Steezy1416">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#343a40" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none bg-secondary cardHeightForTeam">
            <div className="card-body py-3 text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt='' />
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Fidel Deaquino</strong></h5>
              <a className='clickHere-Portfolio' href='https://fdeaquino.github.io/react-portfolio/'><p className="card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/fdeaquino">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#343a40" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none bg-secondary cardHeightForTeam">
            <div className="card-body py-3 text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt='' />
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Pablo Ramirez</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/graslowsnail">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#343a40" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0 shadow-none bg-secondary cardHeightForTeam">
            <div className="card-body py-3 text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover minifigurePhoto" width="130" height="130" alt='' />
              <h5 className="fw-bold card-title mb-0 developerName"><strong>Josh Thomas</strong></h5>
              <a className='clickHere-Portfolio' href='#placeholder'><p className="card-text mb-2">Portfolio</p></a>
              <ul className="list-inline fs-6 text-muted w-100 mb-0">
                <li className="list-inline-item text-center">
                  <a href="https://github.com/Josh236061">
                    <svg className="bi bi-github" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#343a40" viewBox="0 0 16 16">
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
  </section>
);

export default Contact;
