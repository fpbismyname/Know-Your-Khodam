import React from "react";

const footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-center">
        <div className="flex flex-row mt-5 mobile:flex-col">
          <div className="flex flex-col justify-center text-center text-white mobile:flex-row">
            <h1>
              Created by{" "}
              <a href="https://www.instagram.com/fpb_vfx/">
                <strong className="text-pink-400 underline">
                  FPB.JPEG <i className="bi bi-instagram"></i>
                </strong>
              </a>
            </h1>
          </div>
          <i className="bi bi-dash mx-2 text-white mobile:hidden"></i>
          <div className="flex flex-col justify-center mobile:flex-row">
            <p className="text-white">
              Sawer Gua{" "}
              <a href="https://saweria.co/FajarSatBoy">
                <strong className="underline text-green-300">
                  FajarSatBoy <i className="bi bi-coin"></i>
                </strong>
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          <p className="text-red-500">
            On Developed{" "}
            <i className="bi bi-exclamation-square-fill text-yellow-400"></i>
          </p>
        </div>
      </footer>
    </>
  );
};

export default footer;
