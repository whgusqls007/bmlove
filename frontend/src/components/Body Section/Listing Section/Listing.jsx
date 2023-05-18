import React from "react";
import "./listing.css";

import image2 from "../../../assets/image2.jpg";

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image2} alt="Image" />
          <h3>여기다 사진 보여주기</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image2} alt="Image" />
          <h3>여기다 사진 보여주기</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image2} alt="Image" />
          <h3>여기다 사진 보여주기</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={image2} alt="Image" />
          <h3>여기다 사진 보여주기</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading fle">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={image2} alt="image" />
              <img src={image2} alt="image" />
              <img src={image2} alt="image" />
              <img src={image2} alt="image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading fle">
            <h3>featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={image2} alt="image" />
              <img src={image2} alt="image" />
              <img src={image2} alt="image" />
              <img src={image2} alt="image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
