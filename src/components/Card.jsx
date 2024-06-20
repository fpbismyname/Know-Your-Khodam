import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import KhodamIMG from "../assets/khodam.png";
import Footer from "./Footer.jsx";

const card = () => {
  //Check Nama apakah sudah masuk apa belum
  const [name, setName] = useState("");
  const [nama, setNama] = useState("");
  const [khodam, setCurrentKhodam] = useState(0);

  //Data Khodam
  var dataKhodam = [
    {
      nama_khodam: "Kucing Botol",
      skill_khodam:
        "Mengumpulkan Botol Kosong dan Menjadikannya Sebagai Koleksi Berharga",
    },
    {
      nama_khodam: "Si Gajah Listrik",
      skill_khodam:
        "Mengisi Baterai dengan Cepat sehingga Anda Tidak Perlu Khawatir Lagi Tentang Kehabisan Baterai",
    },
    {
      nama_khodam: "Lemur Kacamata",
      skill_khodam:
        "Mengoreksi Kesalahan dengan Cepat dan Memperbaiki Kesalahan Secara Mandiri",
    },
    {
      nama_khodam: "Kera Pintar",
      skill_khodam:
        "Menghitung dengan Cepat dan Mempermudah Anda dalam Melakukan Perhitungan Kompleks",
    },
    {
      nama_khodam: "Burung Cat",
      skill_khodam: "Menghias Rumah dengan Warnai Cat yang Indah dan Menarik",
    },
    {
      nama_khodam: "Ikan Sampan",
      skill_khodam:
        "Membantu Anda dalam Memancing dengan Mengendalikan Sampan Secara Mandiri",
    },
    {
      nama_khodam: "Ayam Komputer",
      skill_khodam:
        "Mempercepat Proses Pengolahan Data Komputer dan Menjaga Agar Komputer Tidak Melayang",
    },
    {
      nama_khodam: "Singa Kipas Angin",
      skill_khodam:
        "Mendinginkan Ruangan dengan Menghembus Angin yang Dingin dan Menyegarkan",
    },
    {
      nama_khodam: "Kuda Sepeda",
      skill_khodam:
        "Mempermudah Anda dalam Bersepeda dengan Menggerakkan Sepeda Secara Mandiri",
    },
    {
      nama_khodam: "Ular Telepon",
      skill_khodam:
        "Mempermudah Anda dalam Melakukan Panggilan Telepon dan Membalas SMS dengan Cepat",
    },
    {
      nama_khodam: "Bebek Radio",
      skill_khodam:
        "Memainkan Musik Favorit Anda dan Menjaga Agar Suara Radio Tetap Bersih dan Rapi",
    },
    {
      nama_khodam: "Kelinci Kamera",
      skill_khodam:
        "Membantu Anda dalam Mengambil Foto dan Video dengan Mengontrol Kamera Secara Mandiri",
    },
    {
      nama_khodam: "Sapi TV",
      skill_khodam:
        "Memutar Film dan Acara TV Favorit Anda dengan Mengontrol TV Secara Mandiri",
    },
    {
      nama_khodam: "Banteng Kulkas",
      skill_khodam:
        "Mempertahankan Suhu Dingin di Dalam Kulkas dan Memastikan Makanan Tetap Segar",
    },
    {
      nama_khodam: "Kuda Listrik",
      skill_khodam:
        "Membantu Anda dalam Memasak dengan Mengontrol Listrik Secara Mandiri",
    },
    {
      nama_khodam: "Gajah Mesin Cuci",
      skill_khodam:
        "Membantu Anda dalam Mencuci dan Membersihkan Pakaian dengan Mengontrol",
    },
  ];

  //Fungsi handler untuk mengisi nama
  const getName = (event) => {
    setNama(event.target.value);
    setCurrentKhodam(Math.round(Math.random() * (dataKhodam.length - 0)));
  };
  const setKhodam = () => {
    if (setNama.length <= 0) {
    } else {
      setName(nama);
    }
  };
  const resetKhodam = () => {
    setNama("");
    setName("");
    setCurrentKhodam(0);
  };

  //Mengembalikan Tampilan
  return (
    <>
      <div className="flex min-h-screen justify-center items-center p-5 flex-col">
        <div className="flex flex-col bg-blue-200 p-24 rounded-xl gap-5 mobile:p-4 mobile:gap-2 flex-wrap text-center">
          <div className="flex flex-row justify-center font-bold mb-5 p-3 mobile:mb-2">
            <img src={KhodamIMG} className="object-scale-down w-20" />
          </div>
          <div className="flex flex-row justify-center font-bold mb-5 p-3 mobile:mb-2">
            <h1 className="text-5xl tracking-widest mobile:text-xl">
              Khow Your Khodam
            </h1>
          </div>
          {name ? (
            <>
              <div className="flex flex-row justify-center">
                <p className="text-xl mobile:text-sm mobile:text-center">
                  Saudara {nama}, Khodam anda adalah :
                </p>
              </div>
              <div className="flex justify-center text-5xl">
                <h1 className="text-5xl font-bold rounded-lg text-white bg-blue-400 p-4 drop-shadow mobile:text-xl mobile:p-2">
                  {dataKhodam[khodam].nama_khodam}
                </h1>
              </div>
              <div className="flex justify-center text-5xl">
                <p className="text-xl font-bold text-blue-600 drop-shadow mobile:text-sm">
                  {dataKhodam[khodam].skill_khodam}
                </p>
              </div>
              <div className="flex justify-center my-3">
                <button
                  className="bg-red-300 rounded-full p-5 text-md font-bold gap-2 flex"
                  onClick={resetKhodam}
                >
                  <i className="bi bi-arrow-clockwise"></i>
                  Cek Kembali
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row justify-center">
                <p className="text-xl mobile:text-sm mobile:text-center">
                  Cek khodam yang tersembunyi dalam diri kamu
                </p>
              </div>
              <input
                className="text-center text-xl p-5 rounded-full outline-none focus:font-bold mobile:text-sm mobile:p-3"
                placeholder="Masukan nama untuk cek khodam"
                type="text"
                onChange={getName}
              />
              <div className="flex justify-center my-3">
                {nama ? (
                  <>
                    <button
                      className="bg-red-300 rounded-full p-5 text-md font-bold gap-2 flex"
                      onClick={setKhodam}
                    >
                      <i className="bi bi-fire"></i>
                      Cek Khodam
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-red-300 rounded-full p-5 text-md font-bold gap-2 flex disabled:bg-gray-400"
                      onClick={setKhodam}
                      disabled
                    >
                      <i className="bi bi-fire"></i>
                      Cek Khodam
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default card;
