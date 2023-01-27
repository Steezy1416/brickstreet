import React, { useState } from "react";
import { useMutation } from "@apollo/client"
import Select from "react-select";
import { CreatePost } from "../utils/mutations"

const AddPost = () => {

  const [createPost, postInfo] = useMutation(CreatePost, {
    onCompleted: data => {
      console.log(data)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const itemName = document.querySelector("#itemName").value
    const itemDescription = document.querySelector("#itemDescription").value
    const categoriesArr = []
    let image = ""

    const categories = document.querySelector("#categories").childNodes[3].children
    for (let i = 0; i < categories.length; i++) {
      categoriesArr.push(categories[i].value)

    }
    const bidPrice = parseInt(document.querySelector("#bidprice").value)
    console.log(bidPrice)

    const file = document.querySelector("input[type=file]").files[0]
    const reader = new FileReader()

    reader.addEventListener("load", async () => {

      const result = await reader.result
      handleResult(result)
        .then(() => {
          createPost({
            variables: {
              userId: "63cdcd19061e48c8544531cb",
              postImage: image,
              title: itemName,
              description: itemDescription,
              bidPrice: bidPrice,
              availability: "available",
              categoryIds: categoriesArr
            }
          })
        })
    }, false)



    if (file) { reader.readAsDataURL(file) }

    const handleResult = async (result) => {
      image = result
    }

  }

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

                <form className="text-center" method="post" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input className="form-control" type="text" name="itemName" id="itemName" placeholder="Item name" />
                  </div>

                  <textarea id="itemDescription" class="mb-3 form-control" name="itemDescription" rows="6" placeholder="Item Description">
                  </textarea>

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
                    id="categories"
                  />

                  <label className="mb-3">
                    What is the bid price for your item?
                  </label>
                  <div className="mb-3">
                    <input className="form-control" type="number" id="bidprice" name="bidprice"
                      placeholder="Choose a price" min="1" max="999" />
                  </div>

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
