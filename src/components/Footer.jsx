import React from "react";

const footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-center">
        <div className="flex flex-row mt-5 mobile:flex-col justify-center">
          <div className="flex flex-col justify-center text-center text-white mobile:flex-row">
            <h1>
              Made by{" "}
              <a href="https://linktr.ee/khow_your_khodam_team">
                <strong className="underline text-red-400">
                  KYK Team <i className="bi bi-people-fill"></i>
                </strong>
              </a>
            </h1>
          </div>
          <i className="bi bi-dash mx-2 text-white mobile:hidden"></i>
          <div className="flex flex-col justify-center mobile:flex-row">
            <p className="text-white">
              Support kami di{" "}
              <a href="https://saweria.co/FajarSatBoy">
                <strong className="underline text-green-300">
                  Saweria <i className="bi bi-coin"></i>
                </strong>
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          <p className="text-yellow-500 font-bold">CKK - v1.0</p>
        </div>
      </footer>
    </>
  );
};

export default footer;
