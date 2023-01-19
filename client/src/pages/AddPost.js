import React, { useState, useEffect} from 'react';


const AddPost = () => {

    const [values, setValues] = useState({
    name: "",
    //userId: _id,
    description: "",
    condition: "",
    price: "",
    sellerShippingCost: "10",
    category: "",
    formData: new FormData(),
  });


    const {
        name,
        description,
        condition,
        price,
        sellerShippingCost,
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
                <select
                  id="category"
                  name="category"
                  className=""
                >
                  <option> Please Select </option>
                  <option value="harryPotter">HarryPotter </option>
                  <option value="cars">Car</option>
                  <option value="architecture">Architecture</option>
                  <option value="other"> Other</option>
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

        {/*CONDITION BOX*/}
        <div className="">
              <label className="">
                Condition
              </label>

              <div className="">
                <select
                  id="condition"
                  onChange={handleChange("condition")}
                  value={condition}
                  name="condition" 
                  className=""
                >

                  <option> Please Select </option>
                  <option value="New with box">New with box</option>
                  <option value="New without box">New without box</option>
                  <option value="New with defects">New with defects</option>
                  <option value="Pre-owned">Pre-owned</option>
                </select>
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

        {/* SHIPPING */}
        <div>
            <div className="">
              <h3 className=""> Shipping </h3>
            </div>

                    <div className="flex items-center">
                      <input
                        id=""
                        name=""
                        onChange={handleChange("who_pays")}
                        value={""}
                        type="radio"
                        className=""
                      />
                      <label
                        className=""
                      >
                        Set Shipping Price
                      </label>
                    </div>

                    <div className="">
                      <input
                        id=""
                        name=""
                        onChange={handleChange("who_pays")}
                        value={""}
                        type="radio"
                        className=""
                      />
                      <label className="">
                        Provide Free Shipping
                      </label>
                    </div>

        <div className='w-1/2'>
            <p className="mt-4">
                Shipping Cost
            </p>
            <div className="">
                    <span className="">$</span>
                </div>
                <input
                    type="number"
                    min='0.00'
                    max='100000.00'
                    step='1.00'
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="10.00"
                    aria-describedby="price-currency"
                    value={sellerShippingCost}
                    onChange={handleChange('sellerShippingCost')}
                />

                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                        USD
                    </span>
                </div>

            </div>
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

