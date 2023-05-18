import React from "react";
import "./activity.css";

import image2 from "../../../assets/image2.jpg";

import { BsArrowRightShort } from "react-icons/bs";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={image2} alt="image" />
          <div className="customerDetails">
            <span className="name">name</span>
            <small>블라블라브,ㄹ라</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={image2} alt="image" />
          <div className="customerDetails">
            <span className="name">name</span>
            <small>블라블라브,ㄹ라</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={image2} alt="image" />
          <div className="customerDetails">
            <span className="name">name</span>
            <small>블라블라브,ㄹ라</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={image2} alt="image" />
          <div className="customerDetails">
            <span className="name">name</span>
            <small>블라블라브,ㄹ라</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
