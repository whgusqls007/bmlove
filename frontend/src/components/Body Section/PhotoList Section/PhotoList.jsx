import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaceImagesAction } from "../../../api/placeApi/placeAction";

//==== Components ====//
import {
  Wrapper,
  Main,
} from "../../../style/body/PhtoList Section/PhotoListStyle";
import Heading from "../Heading";
import Item from "./PhotoListItem";

const PhotoList = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.place);

  useEffect(() => {
    dispatch(
      getPlaceImagesAction({
        params: {
          page: "0",
          size: "2",
          sort: "id,DESC",
        },
      })
    );
  }, [dispatch]);

  return (
    <Wrapper>
      <Heading title={"우리 사진"} showIcon={true} />
      <Main>
        {images && images.map((e) => <Item key={e.id} uri={e.uri} />)}
      </Main>
    </Wrapper>
  );
};

export default PhotoList;
