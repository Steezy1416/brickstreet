import React, { useState, useEffect } from "react";
import Select from "react-select";

const AddPost = () => {
  const [values, setValues] = useState({
    name: "",
    //userId: _id,
    description: "",
    price: "",
    category: "",
    formData: new FormData(),
  });

  const { name, description, price, category, formData, type } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const options = [
    { value: "Classic", label: "Classic" },
    { value: "BrickHeadz", label: "BrickHeadz" },
    { value: "Minifigures", label: "Minifigures" },
    { value: "Flowers", label: "Flowers" },
    { value: "Architecture", label: "Architecture" },
    { value: "Marvel", label: "Marvel" },
    { value: "Harry Potter", label: "Harry Potter" },
    { value: "Disney", label: "Disney" },
    { value: "Star Wars", label: "Star Wars" },
    { value: "Avatar", label: "Avatar" },
    { value: "Cars", label: "Cars" },
    { value: "Creator", label: "Creator" },
    { value: "City", label: "City" },
    { value: "Ideas", label: "Ideas" },
    { value: "Chinese New Year", label: "Chinese New Year" },
    { value: "TV Show", label: "TV Show" }
  ];

  return (
    <section className="position-relative py-4 py-xl-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className='msg-pg-title'>Add Post</h2>
            <p className="w-lg-50 msg-body">Fill out the form to add your item.</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div className="card mb-5">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="bs-icon-xl bs-icon-circle bs-icon my-3"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg></div>
                <form className="text-center" method="post">
                  <div className="mb-3">
                    <input className="form-control" type="text" name="itemName" placeholder="Item name" />
                  </div>
                  <textarea id="itemDescription" class="mb-3 form-control" name="itemDescription" rows="6" placeholder="Item Description"></textarea>
                  <label className="mb-3">
                    Choose an item category
                  </label>
                  <Select
                    // defaultValue={[options[2]]}
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select col-12 mb-3"
                    classNamePrefix="select"
                  />
                  <label className="mb-3">
                    Choose and upload a photo for your item
                  </label>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    ></input>
                    <label
                      class="input-group-text"
                      for="inputGroupFile02"
                    >
                      Upload
                    </label>
                  </div>

                  <div className="mb-3">
                    <button className="btn btn-moving-gradient btn-dark d-block w-100" type="submit">
                      List Item
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPost;
