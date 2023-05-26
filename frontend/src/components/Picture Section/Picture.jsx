import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlaceImagesAction,
  savePlaceImageAction,
} from "../../api/placeApi/placeAction";

const Picture = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const { images } = useSelector((state) => state.place);

  useEffect(() => {
    dispatch(
      getPlaceImagesAction({
        params: {
          sort: "id,DESC",
        },
      })
    );
  }, [dispatch]);

  const onClickHandler = () => {
    const formData = new FormData();
    formData.append("file", file);
    dispatch(savePlaceImageAction(formData));
  };

  return (
    <div className="mainContent">
      <input
        type="file"
        // accept="image/*"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button
        onClick={() => {
          onClickHandler();
        }}
      >
        업로드
      </button>
      {images
        ? images.map((e) => (
            <img
              key={e.id}
              src={`http://jhb.gonetis.com/images/image/get/${e.uri}`}
              // src={`http://127.0.0.1:8081/image/get/${e.uri}`}
              alt="asd"
            />
          ))
        : null}
    </div>
  );
};

export default Picture;
