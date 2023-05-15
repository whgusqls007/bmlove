import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaceImagesAction } from "../../../api/placeapi/placeAction";

const List = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.place);

  useEffect(() => {
    dispatch(getPlaceImagesAction());
  }, [dispatch]);

  return (
    <li>
      {images
        ? images.map((image) => {
            return (
              <ul key={image.id} style={{ width: "500px" }}>
                <img
                  src={`http://18.191.103.58/images/image/get/${image.uri}`}
                ></img>
              </ul>
            );
          })
        : null}
    </li>
  );
};

export default List;
