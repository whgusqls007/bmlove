import React from "react";

//==== Images, Icons ====//
import { BsArrowRightShort } from "react-icons/bs";

//==== Components ====//
import { Wrapper } from "../../style/body/HeadingStyle";

const Heading = ({ title, showIcon }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {showIcon ? (
        <button>
          See All
          <BsArrowRightShort className="icon" />
        </button>
      ) : null}
    </Wrapper>
  );
};

export default Heading;
