import React, { useState } from 'react'
import arrow from "../assets/img/webp/up-arrow.webp";
const TopButton = () => {
     const [backTop, setBackTop] = useState(false);
     const moveToTop = () => {
       document.documentElement.scrollTop = 0;
     };
     window.addEventListener("scroll", () => {
       if (document.documentElement.scrollTop > 100) {
         setBackTop(true);
       } else {
         setBackTop(false);
       }
     }); 
  return (
    <>
      {backTop ? (
        <div
          onClick={moveToTop}
          className="TopButton position-fixed end-0 bottom-0 cursiorPointer w_50 z-3 me-3 pb-3 cursiorPointer"
        >
          <img className="w-100" src={arrow} alt="img" />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TopButton