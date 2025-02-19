import { useState, useEffect, useRef } from "react";
import { Tilt } from "@jdion/tilt-react";
import Typed from "typed.js";
import paslon1 from "../assets/paslon-1.png";
import paslon2 from "../assets/paslon-2.png";
import paslon3 from "../assets/paslon-3.png";
import paslonNone from "../assets/paslon-none.png";

function WithGolput() {
  const [angka1, setAngka1] = useState(() => {
    return JSON.parse(localStorage.getItem("angka1")) || 0;
  });
  const [angka2, setAngka2] = useState(() => {
    return JSON.parse(localStorage.getItem("angka2")) || 0;
  });
  const [angka3, setAngka3] = useState(() => {
    return JSON.parse(localStorage.getItem("angka3")) || 0;
  });
  const [angka4, setAngka4] = useState(() => {
    return JSON.parse(localStorage.getItem("angka4")) || 0;
  });

  const typedText = useRef(null);

  useEffect(() => {
    localStorage.setItem("angka1", JSON.stringify(angka1));
  }, [angka1]);
  useEffect(() => {
    localStorage.setItem("angka2", JSON.stringify(angka2));
  }, [angka2]);
  useEffect(() => {
    localStorage.setItem("angka3", JSON.stringify(angka3));
  }, [angka3]);
  useEffect(() => {
    localStorage.setItem("angka4", JSON.stringify(angka4));
  }, [angka4]);

  const handleSetAngka1 = () => {
    setAngka1((prev) => prev + 1);
  };
  const handleSetAngka2 = () => {
    setAngka2((prev) => prev + 1);
  };
  const handleSetAngka3 = () => {
    setAngka3((prev) => prev + 1);
  };
  const handleSetAngka4 = () => {
    setAngka4((prev) => prev + 1);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "1") handleSetAngka1();
      if (e.key === "2") handleSetAngka2();
      if (e.key === "3") handleSetAngka3();
      if (e.key === "4") handleSetAngka4();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleReset = () => {
    setAngka1(0);
    setAngka2(0);
    setAngka3(0);
    setAngka4(0);
  };

  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: [`Pemilihan Ketua dan Wakil Ketua Osis`],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-y-10">
        <h1 className="text-6xl font-bold text-center font-[Clash_Display]">
          <span ref={typedText}></span>
        </h1>

        <div className="flex flex-row gap-x-10 mt-5 justify-center">
          <Tilt>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">Paslon 1</h1>
              <button
                onClick={handleSetAngka1}
                className="hover:cursor-pointer"
              >
                <img src={paslon1} alt="1" width={300} />
              </button>
              <h1 className="text-4xl">{angka1}</h1>
            </div>
          </Tilt>
          <Tilt>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">Paslon 2</h1>
              <button
                onClick={handleSetAngka2}
                className="hover:cursor-pointer"
              >
                <img src={paslon2} alt="2" width={300} />
              </button>
              <h1 className="text-4xl">{angka2}</h1>
            </div>
          </Tilt>
          <Tilt>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">Paslon 3</h1>
              <button
                onClick={handleSetAngka3}
                className="hover:cursor-pointer"
              >
                <img src={paslon3} alt="3" width={300} />
              </button>
              <h1 className="text-4xl">{angka3}</h1>
            </div>
          </Tilt>
          <Tilt>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">Golput</h1>
              <button
                onClick={handleSetAngka4}
                className="hover:cursor-pointer"
              >
                <img src={paslonNone} alt="None" width={300} />
              </button>
              <h1 className="text-4xl">{angka4}</h1>
            </div>
          </Tilt>
        </div>

        <button
          onClick={handleReset}
          className="mt-5 bg-[#7a3f68] px-5 py-2 rounded-lg hover:bg-[#7a3f68b0] hover:cursor-pointer"
        >
          Reset Count
        </button>
        <h1 className="absolute bottom-0">
          Made with &#10084;&#65039; by Arel Smith
        </h1>
      </div>
    </>
  );
}

export default WithGolput;
