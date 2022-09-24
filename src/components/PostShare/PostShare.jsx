/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="Profile Image" />

      <div>
        <input type="text" placeholder="What's happening" id="" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && 
            <div className="previewImage">
                <UilTimes onClick={() => setImage(null)} />

                <img src={image.image} alt="" />
            </div>
        }
      </div>
    </div>
  );
};

export default PostShare;
