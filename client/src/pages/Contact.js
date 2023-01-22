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
    </div>
);

export default Contact;
