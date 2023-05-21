import React from "react";

//==== Images, Icons ====//
import { BsArrowRightShort } from "react-icons/bs";

//==== Components ====//
import { Wrapper } from "../../style/body/HeadingStyle";

const Heading = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <button>
        See All
        <BsArrowRightShort className="icon" />
      </button>
    </Wrapper>
  );
};

export default Heading;
