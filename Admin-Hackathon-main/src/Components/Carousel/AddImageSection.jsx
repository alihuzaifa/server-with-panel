import React from "react";

import "../Style/Login.css";

const AddImageSection = () => {
  return (
    <>
      <div className="form-container">
        <div className="form">
          <div className="title">Carousel Image</div>
          <div className="input-container ic2">
            <input id="email" className="input" type="file" placeholder=" " />
          </div>
          <button type="text" className="submit">
            Add Images
          </button>
        </div>
      </div>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
          integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
          crossOrigin="anonymous"
        />
      </div>
      <div className="container-fluid view-image">
        <div className="row">
          <div className="col-3">
            <div className="card bg-white">
              <img
                src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                alt="image"
              />
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          <div className="col-3">
            <div className="card bg-white">
              <img
                src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                alt="image"
              />
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          <div className="col-3">
            <div className="card bg-white">
              <img
                src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                alt="image"
              />
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          <div className="col-3">
            <div className="card bg-white">
              <img
                src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                alt="image"
              />
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImageSection;
