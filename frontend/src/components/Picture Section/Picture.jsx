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
  const { images } = useSelector((state) => state.place);

  useEffect(() => {
    dispatch(getPlaceImagesAction());
  }, [dispatch]);

  return (
    <div className="mainContent">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={() => {
          const formData = new FormData();
          formData.append("file", file);
          dispatch(savePlaceImageAction(formData));
        }}
      >
        업로드
      </button>
      {images
        ? images.map((e) => (
            <img
              // src={`http://jhb.gonetis.com/images/image/get/${e.url}`}
              src={`http://127.0.0.1:8081/image/get/${e.uri}`}
              alt=""
            />
          ))
        : null}
    </div>
  );
};

export default Picture;
