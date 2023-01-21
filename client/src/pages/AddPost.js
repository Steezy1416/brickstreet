import React, { useState, useEffect} from 'react';


const AddPost = () => {

    const [values, setValues] = useState({
    name: "",
    //userId: _id,
    description: "",
    price: "",
    category: "",
    formData: new FormData(),
  });


    const {
        name,
        description,
        price,
        category,
        formData,
        type
    } = values;


    const handleChange = (name) => (event) => {
        const value = event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };


    return (
        <div>
        <form className='' onSubmit=''>
                <div>
                    <h3 className="">Add Your lego set!</h3>
                        <p className="">
                        </p>
                </div>

            {/* CATEGORY */}
            <div className="">
              <label
                htmlFor="size"
                className=""
              >
                Category
              </label>
            <div className="">
                <select class="select" multiple>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
</select>
              </div>
            </div>

        {/* ITEM NAME */}
        <div className="">
              <label className="">
                Item name
              </label>

              <div className="">
                <input
                  type="text"
                  onChange={handleChange("name")}
                  value={name}
                  name="name"
                  id="name"
                  className=""
                />
              </div>
            </div>


        {/* DISCRIPTION BOX*/}
        <div className="">
              <label className="">
                Description
              </label>
              <div className="">
                <textarea
                  id="description"
                  onChange={handleChange("description")}
                  value={description}
                  name="description"
                  rows={2}
                  className=""
                  defaultValue={""}
                />
              </div>
              <p className="">
                Write a few sentences about the product.
              </p>
        </div>

        {/* PICTURE UPLOAD*/}
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02"></input>
          <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>


        {/*BUTTON*/}
        <div className="">
          <button className="">
            List Product
          </button>
        </div>


        </form>
        </div>
    );
};

export default AddPost;

