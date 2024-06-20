import React from "react";

const footer = () => {
  return (
    <>
      <footer className="flex justify-center text-white">
        <div className="flex px-5 py-2 rounded-full">
          <h1>
            Created by{" "}
            <a href="https://www.instagram.com/fpb_vfx/">
              <strong className="text-pink-400 underline">
                FPB.JPEG <i className="bi bi-instagram"></i>
              </strong>
            </a>
          </h1>
        </div>
      </footer>
      <div className="flex justify-center">
        <p className="text-red-500">On Developed <i className="bi bi-exclamation-square-fill text-yellow-400"></i></p>
      </div>
    </>
  );
};

export default footer;
