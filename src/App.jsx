import { useState, useEffect } from "react";
import { Tilt } from "@jdion/tilt-react";
import paslon1 from "./assets/paslon-1.png";
import paslon2 from "./assets/paslon-2.png";
import paslon3 from "./assets/paslon-3.png";

function App() {
  const [angka1, setAngka1] = useState(() => {
    return JSON.parse(localStorage.getItem("angka1")) || 0;
  });
  const [angka2, setAngka2] = useState(() => {
    return JSON.parse(localStorage.getItem("angka2")) || 0;
  });
  const [angka3, setAngka3] = useState(() => {
    return JSON.parse(localStorage.getItem("angka3")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("angka1", JSON.stringify(angka1));
  }, [angka1]);
  useEffect(() => {
    localStorage.setItem("angka2", JSON.stringify(angka2));
  }, [angka2]);
  useEffect(() => {
    localStorage.setItem("angka3", JSON.stringify(angka3));
  }, [angka3]);

  const handleSetAngka1 = () => {
    setAngka1((prev) => prev + 1);
  };
  const handleSetAngka2 = () => {
    setAngka2((prev) => prev + 1);
  };
  const handleSetAngka3 = () => {
    setAngka3((prev) => prev + 1);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "1") handleSetAngka1();
      if (e.key === "2") handleSetAngka2();
      if (e.key === "3") handleSetAngka3();
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
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center font-[Clash_Display]">
          Pemilihan Ketua dan Wakil Ketua Osis
        </h1>

        <div className="flex flex-row gap-x-5 mt-5 justify-center">
          <Tilt>
            <div className="flex flex-col items-center">
              <button
                onClick={handleSetAngka1}
                className="hover:cursor-pointer"
              >
                <img src={paslon1} alt="1" width={300} />
              </button>
              <h1 className="text-2xl">{angka1}</h1>
            </div>
          </Tilt>
          <Tilt>
            <div className="flex flex-col items-center">
              <button
                onClick={handleSetAngka2}
                className="hover:cursor-pointer"
              >
                <img src={paslon2} alt="2" width={300} />
              </button>
              <h1 className="text-2xl">{angka2}</h1>
            </div>
          </Tilt>
          <Tilt>
            <div className="flex flex-col items-center">
              <button
                onClick={handleSetAngka3}
                className="hover:cursor-pointer"
              >
                <img src={paslon3} alt="3" width={300} />
              </button>
              <h1 className="text-2xl">{angka3}</h1>
            </div>
          </Tilt>
        </div>

        <button
          onClick={handleReset}
          className="mt-5 bg-[#7a3f68] px-5 py-2 rounded-lg hover:bg-[#7a3f68b0] hover:cursor-pointer"
        >
          Reset Count
        </button>
      </div>
    </>
  );
}

export default App;
