import React from 'react'

const Preloader = () => {
         document.body.classList.add("overflow_hidden");
         setTimeout(() => {
           document.getElementById("none").style.display = "none";
           document.body.classList.remove("overflow_hidden");
         }, 2500);
  return (
    <div>
      <section
        className="d_flex justify-content-center flex-column align-items-center min-vh-100 w-100 position-fixed top-0 start-0 z_1000 bg_blurLoader"
        id="none"
      >
        <div className="overflow-hidden animationPreloader2">
          <h3 className="ff_heavy fs_2xl clr_white fw-bold">
            WELCOME
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Preloader