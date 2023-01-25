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
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <section className="position-relative py-4 py-xl-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Add Post</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div className="card mb-5">
              <div className="card-body d-flex flex-column align-items-center">
                <form className="text-center" method="post">
                  <div className="mb-3">
                    {/* ITEM NAME */}
                    <div className="container">
                      {/* <label className="">Item name</label> */}

                      <div className="row">
                        <label className="mb-2">Item name</label>
                        <input
                          type="text"
                          onChange={handleChange("name")}
                          value={name}
                          name="name"
                          id="name"
                          className="col-12 mb-3"
                        />
                        <label className="mb-2">Description</label>
                        <textarea
                          id="description"
                          onChange={handleChange("description")}
                          value={description}
                          name="description"
                          rows={2}
                          className="col-12 mb-3"
                          defaultValue={""}
                        />
                        <label className="mb-2">
                          Choose a product category
                        </label>
                        <Select
                          defaultValue={[options[2]]}
                          isMulti
                          name="colors"
                          options={options}
                          className="basic-multi-select col-12 mb-3"
                          classNamePrefix="select"
                        />
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
                      </div>
                    </div>
                  </div>
                  {/* <div className="mb-3">
                    
                    <label className="container">Description</label>
                    <div className="row">
                      <textarea
                        id="description"
                        onChange={handleChange("description")}
                        value={description}
                        name="description"
                        rows={2}
                        className="col-12"
                        defaultValue={""}
                      />
                    </div>
                    <p className="">Write a few sentences about the product.</p>
                  </div> */}

                  <div className="mb-3">
                    <button className="btn btn-moving-gradient btn-dark">
                      List Product
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
