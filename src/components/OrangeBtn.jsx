import React from "react";

export const OrangeBtn = (props) => {
  return (
    <>
      <button className="us_btn rounded-pill clr_white position-relative us_back fw_700 ff_medium fs_sm">
       {props.text}
      </button>
    </>
  );
};
