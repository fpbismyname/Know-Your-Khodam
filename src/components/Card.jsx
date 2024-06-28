import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import KhodamIMG from "../assets/khodam.png";
import Footer from "./Footer.jsx";
import Swal from "sweetalert2";
import Confetti from "js-confetti";

//Data Khodam
var dataKhodam = [
  {
    nama_khodam: "Bagas Dribble",
    skill_khodam:
      "Khodam pendamping yang akan selalu menjaga anda dengan kekuatan dribble manjanya",
    emoji_khodam: "🏀",
    warna_khodam: "#f16222",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/what-the-hell-goofy-ahh-slv-sounds.mp3",
  },
  {
    nama_khodam: "Katak Bhizer",
    skill_khodam:
      "Raja khodam pengendali pukulan, kebal terhadap serangan benda tajam, sekali tebas nyawa kalian terlepas",
    emoji_khodam: "🐸",
    warna_khodam: "#00d26a",
    suara_khodam: "https://www.myinstants.com/media/sounds/frog-laugh.mp3",
  },
  {
    nama_khodam: "AmbatuJin",
    skill_khodam:
      "Khodam yang berbentuk arwah, Memiliki skill ulti menembak musuh dengan peluru yang berisi cairan beracun",
    emoji_khodam: "👻",
    warna_khodam: "#c480cd",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/ambatukam-harmony.mp3",
  },
  {
    nama_khodam: "Rusdi ketiplek",
    skill_khodam:
      "Raja barbershop ahli undercut, memiliki alat khusus untuk melumpuhkan lawan dengan melakukan keplekan pinggulnya",
    emoji_khodam: "💈",
    warna_khodam: "#05a7ed",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/biwir-berem-berem-bang-rusdi.mp3",
  },
  {
    nama_khodam: "Joko Kopling",
    skill_khodam:
      "Penguasa motor kopling indonesia, memiliki kekuatan genggaman kuat anti basah saat mengenggam kopling di motor apapun",
    emoji_khodam: "🛵",
    warna_khodam: "#f92f60",
    suara_khodam: "https://www.myinstants.com/media/sounds/joko-kopling.mp3",
  },
  {
    nama_khodam: "Mr. Slamet",
    skill_khodam:
      "Khodam penjaga selalu berada dimanapun ketika kita terjatuh, kecuali tidak wkwk. memiliki ketangkasan yang sigap untuk menyelamatkan mu, insyaallah akan selamat dimanapun kalian berada",
    emoji_khodam: "🤲",
    warna_khodam: "#fdd641",
    suara_khodam: "https://www.myinstants.com/media/sounds/mrslamet.mp3",
  },
  {
    nama_khodam: "Ular Ngawi asli",
    skill_khodam:
      "Urban legend asli Ngawi, konon katanya ular ini hanya pernah terlihat sekali oleh mas Fua",
    emoji_khodam: "🐍",
    warna_khodam: "#00d26a",
    suara_khodam: "https://www.myinstants.com/media/sounds/ularngawi.mp3",
  },
  {
    nama_khodam: "Kevin lontong",
    skill_khodam:
      "Skil yang bisa memberikan lontong setiap 2 menit dan bisa di upgrade sesuai level",
    emoji_khodam: "🍌",
    warna_khodam: "#f9c23c",
    suara_khodam: "https://www.myinstants.com/media/sounds/lontong.mp3",
  },
  {
    nama_khodam: "Cahyo pentil",
    skill_khodam: "Sosok penjaga para motor vloger",
    emoji_khodam: "🏍️",
    warna_khodam: "#ff822d",
    suara_khodam: "https://www.myinstants.com/media/sounds/meme-tutorial.mp3",
  },
  {
    nama_khodam: "Rahmat Toyota",
    skill_khodam:
      "Penjaga seluruh mobil toyota, memiliki ulti menyalakan telolet setiap 13 menit",
    emoji_khodam: "🚘",
    warna_khodam: "#26c9fc",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/basuri-v1-nada-23.mp3",
  },
  {
    nama_khodam: "Sayur Asem",
    skill_khodam:
      "Khodam kamu ini jarang mandi, jadi baunya sangat busuk dan sangat sangat gyat dan cocok dengan Indra Capcay",
    emoji_khodam: "🥒",
    warna_khodam: "#46941b",
    suara_khodam: "https://www.myinstants.com/media/sounds/lose1.mp3",
  },
  {
    nama_khodam: "ElManuk Tumalaka",
    skill_khodam:
      "Pengendali manuk(Burung) yang ada di bumi. Khodam ini memiliki skill mengumpulkan semua burung2 lalu memainkannya",
    emoji_khodam: "🐦",
    warna_khodam: "#ca0b4a",
    suara_khodam: "https://www.myinstants.com/media/sounds/tumalaka.mp3",
  },
  {
    nama_khodam: "Putri Ekonomi",
    skill_khodam:
      "Khodam wanita yang dapat membantu ekonomi keluarga anda, memiliki skill regen uang saku sebesar 35% dan regen maxwin ketika main *** sebesar 99%",
    emoji_khodam: "🙆‍♀️",
    warna_khodam: "#8b62bf",
    suara_khodam: "https://www.myinstants.com/media/sounds/money-button.mp3",
  },
  {
    nama_khodam: "Indra Capcay",
    skill_khodam:
      "Dapat mengeluarkan sayur capcay setiap 45 menit, Khodam ini biasanya bekerja sama dengan Sayur asem untuk melengkapi kekuatan khodam-nya",
    emoji_khodam: "🥦",
    warna_khodam: "#00d26a",
    suara_khodam: "https://www.myinstants.com/media/sounds/ack.mp3",
  },
  {
    nama_khodam: "Rangga Cat Lover",
    skill_khodam:
      "Memiliki kekuatan spawn kucing ditempat2 tertentu. Khodam ini akan spawn 30% kucing oyen di dekat seorang yang sigma, dan kucing lainnya di spawn sekat seorang yang skibidi gyat",
    emoji_khodam: "😼",
    warna_khodam: "#ffb02e",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/we-live-we-love-we-lie.mp3",
  },
  {
    nama_khodam: "Reza Chrome",
    skill_khodam:
      "Pengendali Mediafire dan Mega. Dapat membantu meningkatkan kecepatan download sebesar 999%, dan meningkatkan kecepatan upload sebesar 1999%",
    emoji_khodam: "💻",
    warna_khodam: "#aeaeae",
    suara_khodam: "https://www.myinstants.com/media/sounds/musica_1.mp3",
  },
  {
    nama_khodam: "Dian Royko",
    skill_khodam:
      "Membuat penggunanya bisa memasak dengan citarasa yang pas, tanpa harus ketakutan untuk mengalami gosong pada makanan-nya",
    emoji_khodam: "🍝",
    warna_khodam: "#d3d3d3",
    suara_khodam: "https://www.myinstants.com/media/sounds/am-am-mellstroy.mp3",
  },
  {
    nama_khodam: "Rawa Rontek",
    skill_khodam:
      "Memberikan HP tambahan sebanyak 99HP sehingga membuat penggunanya terasa kekal hidup didunia",
    emoji_khodam: "❤️‍🩹",
    warna_khodam: "#f92f60",
    suara_khodam: "https://www.myinstants.com/media/sounds/dukun.mp3",
  },
  {
    nama_khodam: "Tuyul Sumbing",
    skill_khodam:
      "Tuyul ini akan selalu menjagamu walaupun selalu mengatakan slebewww",
    emoji_khodam: "👶",
    warna_khodam: "#fdd641",
    suara_khodam: "https://www.myinstants.com/media/sounds/tuyul-sumbing.mp3",
  },
  {
    nama_khodam: "Miaw SadCat",
    skill_khodam:
      "Khodam ini memiliki kekuatan untuk mengeluarkan suara yang dapat membuat pendengarnya merasakan kesedihan-nya",
    emoji_khodam: "😿",
    warna_khodam: "#ffa02d",
    suara_khodam: "https://www.myinstants.com/media/sounds/miaw-miaw-miaw.mp3",
  },
  {
    nama_khodam: "Ujang PLN",
    skill_khodam:
      "Meskipun diwilayah kalian mati lampu (Mati Listrik), Khodam ini dapat membantu rumah anda tetap menyala abangku",
    emoji_khodam: "⚡",
    warna_khodam: "#ff822d",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/electricity_us849kj.mp3",
  },
  {
    nama_khodam: "Pedro Royale",
    skill_khodam:
      "Khodam ini memiliki kekuatan untuk menjaga pakaian anda tetap bersih dan wangi",
    emoji_khodam: "🌸",
    warna_khodam: "#ff6dc6",
    suara_khodam: "https://www.myinstants.com/media/sounds/pedro-pedro-pe.mp3",
  },
  {
    nama_khodam: "Angsa bluetooth",
    skill_khodam:
      "Bisa menyerang siapa saja orang yang mengganggu tanpa harus menggunakan kabel data",
    emoji_khodam: "🦢",
    warna_khodam: "#9c9c9c",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3",
  },
  {
    nama_khodam: "Engkong Alaska",
    skill_khodam:
      "Khodam ini memiliki kekuatan untuk melakukan spawn singkong setiap 0.0000003 jam, sehingga pemiliknya tidak akan kelaparan",
    emoji_khodam: "🍠",
    warna_khodam: "#f92f60",
    suara_khodam: "https://www.myinstants.com/media/sounds/engkong.mp3",
  },
  {
    nama_khodam: "Krekcek Baud",
    skill_khodam:
      "Memiliki kemampuan untuk spawn kuda lumping untuk melindungi si pemilik. Kuda yang di spawn miliki ulti melempar 200 baut kedepan lawan yang akan menerima damage sebesar 4000HP",
    emoji_khodam: "🔩",
    warna_khodam: "#998ea4",
    suara_khodam:
      "https://www.myinstants.com/media/sounds/metal-pipe-clang.mp3",
  },
  {
    nama_khodam: "Basuri Aipet",
    skill_khodam:
      "Khodam ini dapat mengeluarkan suara telolet sebanyak 20x, sehingga dapat membantu penggunanya untuk melawan musuhnya",
    emoji_khodam: "🚌",
    warna_khodam: "#ffb02e",
    suara_khodam: "https://www.myinstants.com/media/sounds/basuri-2.mp3",
  },
];

//sound
let soundKhodam = new Audio();

const card = () => {
  //Check Nama apakah sudah masuk apa belum
  const [name, setName] = useState("");
  const [nama, setNama] = useState("");
  const [khodam, setCurrentKhodam] = useState(0);
  const GotKhodam = new Audio(
    "https://www.myinstants.com/media/sounds/succes-khodam.mp3"
  );
  const inserKhodam = new Audio(
    "https://www.myinstants.com/media/sounds/got-khodam.mp3"
  );
  const resultKhodam = new Audio(
    "https://www.myinstants.com/media/sounds/notif-harp.mp3"
  );

  //HorrayEffect
  function Horray(emoji) {
    var confetti = new Confetti();
    confetti.addConfetti({
      emojis: [emoji],
      confettiNumber: 20,
      confettiRadius: 0,
    });
    confetti.addConfetti({
      confettiNumber: 60,
    });
  }

  //Loading
  function loading() {
    inserKhodam.play();
    Swal.fire({
      html: "<h1 style='color:#3c72c9; font-weight:bold;'>Khodam anda sedang dicek . . .</h1>",
      icon: "info",
      iconHtml: "🔱",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      willClose: () => {
        GotKhodam.play();
        soundKhodam = new Audio(dataKhodam[khodam].suara_khodam);
        Swal.fire({
          html: "<h1 style='color:#3c72c9; font-weight:bold;'>Khodam ditemukan</h1>",
          icon: "success",
          iconHtml: "🥳",
          timer: 1500,
          showConfirmButton: false,
          allowOutsideClick: false,
          willClose: () => {
            Horray(dataKhodam[khodam].emoji_khodam);
            setName(nama);
            soundKhodam.play();
            resultKhodam.play();
          },
        });
      },
    });
  }

  //Fungsi handler untuk mengisi nama
  const getName = (event) => {
    setNama(event.target.value);
    let type = Math.floor(Math.random() * (dataKhodam.length - 0));
    setCurrentKhodam(Math.floor(Math.random() * (dataKhodam.length - type)));
  };
  const setKhodam = () => {
    if (setNama.length <= 0) {
    } else {
      loading();
    }
  };
  const resetKhodam = () => {
    setNama("");
    setName("");
    setCurrentKhodam(0);
    soundKhodam.pause();
  };

  //Mengembalikan Tampilan
  return (
    <>
      <div className="flex justify-center min-h-[90vh] mobile:min-h-[70vh] items-center flex-col px-[50vh] desktop:px-[30vh] mobile:px-0 tablet:px-[5vh]">
        <div className="flex flex-col bg-blue-200 p-24 rounded-xl gap-5 mobile:p-4 mobile:gap-2 text-center mobile:w-10/12">
          <div className="flex flex-row justify-center font-bold mb-5 p-3 mobile:mb-2">
            <img
              src={KhodamIMG}
              className="object-scale-down w-32 mobile:w-20"
            />
          </div>
          {/* Judul */}
          <div className="flex flex-row justify-center font-bold mb-5 p-3 mobile:mb-2">
            <h1 className="text-5xl tracking-widest mobile:text-xl">
              Cek Khodam Kamu
            </h1>
          </div>
          {/* Hasil Khodam */}
          {name ? (
            <>
              <div className="flex flex-row justify-center break-words">
                <p className="text-xl mobile:text-sm mobile:text-center text-wrap">
                  Saudara{" "}
                  <strong
                    className="px-2 py-1 bg-gray-100 border-2 rounded-full"
                    style={{
                      borderColor: dataKhodam[khodam].warna_khodam,
                      borderWidth: "2px",
                      color: dataKhodam[khodam].warna_khodam,
                    }}
                  >
                    {nama}
                  </strong>
                  , Khodam anda adalah :
                </p>
              </div>
              <div className="flex justify-center text-5xl">
                <h1
                  className="text-5xl font-bold rounded-lg text-white p-4 drop-shadow mobile:text-xl mobile:p-2"
                  style={{
                    backgroundColor: dataKhodam[khodam].warna_khodam,
                    color: dataKhodam[khodam].warna_khodam.length - 1,
                  }}
                >
                  {dataKhodam[khodam].nama_khodam}
                </h1>
              </div>
              <div className="flex justify-center text-5xl">
                <p className="text-xl font-bold text-blue-500 drop-shadow mobile:text-sm m-0 mobile:w-10/12">
                  {dataKhodam[khodam].skill_khodam}
                </p>
              </div>
              <div className="flex justify-center my-3">
                <button
                  className="bg-red-300 rounded-full p-5 text-md font-bold gap-2 flex hover:bg-red-400 duration-150"
                  onClick={resetKhodam}
                >
                  <i className="bi bi-arrow-clockwise"></i>
                  Cek Kembali
                </button>
              </div>
            </>
          ) : (
            // Sebelum Hasil
            <>
              <div className="flex flex-row justify-center">
                <p className="text-xl mobile:text-sm mobile:text-center">
                  Cek khodam yang tersembunyi dalam diri kamu
                </p>
              </div>
              <input
                className="text-center text-xl p-5 rounded-full focus:font-bold mobile:text-sm mobile:p-3 outline-none hover:bg-blue-100 hover:placeholder:drop-shadow duration-150"
                placeholder="Masukan nama untuk cek khodam"
                type="text"
                onChange={getName}
                maxLength="50"
              />
              <div className="flex justify-center my-3">
                {nama ? (
                  <>
                    <button
                      className="bg-red-300 rounded-full p-5 text-md font-bold gap-2 flex hover:bg-red-400 duration-150"
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
      </div>
      <Footer />
    </>
  );
};

export default card;
