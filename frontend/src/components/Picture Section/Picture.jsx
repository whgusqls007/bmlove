import React, { useEffect, useState } from "react";
import List from "./List Section/List";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlaceImagesAction,
  savePlaceImageAction,
} from "../../api/placeapi/placeAction";
const Picture = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const { images } = useSelector((state) => state.place.images);

  useEffect(() => {
    dispatch(getPlaceImagesAction());
  }, [dispatch, images]);

  return (
    <div className="mainContent">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={() => {
          dispatch(savePlaceImageAction(new FormData().append("file", file)));
        }}
      >
        업로드
      </button>
      {images
        ? images.map((e) => (
            <img
              src={`http://jhb.gonetis.com/images/image/get/${e.url}`}
              alt=""
            />
          ))
        : null}
    </div>
  );
};

export default Picture;
