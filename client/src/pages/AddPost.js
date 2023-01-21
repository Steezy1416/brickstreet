import React, { useState, useEffect} from 'react';
import Select from 'react-select';


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

    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className=''>
                <div className='col-md-8 col-xl-6 text-center mx-auto'>
                    <h2 className="">Add Your lego set!</h2>
        <p className="w-lg-50">List your lego set for sale!</p>
                </div>


        <div className=''>
<form className=' text-center w-50 ' onSubmit=''>

            {/* CATEGORY */}
            <Select
            defaultValue={[options[2]]}
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />


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
          <button className="btn btn-moving-gradient btn-dark">
            List Product
          </button>
        </div>


        </form>
        </div>
        </div>
    );
};

export default AddPost;
