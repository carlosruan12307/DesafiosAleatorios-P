import React, { useRef, useState } from "react";

function Sinal({ cores }) {
  const [cor, setcor] = useState("");
  return (
    <div className="flex-component">
      {cores.map((e) => {
        return (
          <div
            onClick={() => {
              setcor(e.cor);
            }}
            className={cor === e.cor ? "sinal ligado" : "sinal desligado"}
            style={{ backgroundColor: e.cor }}
          ></div>
        );
      })}
    </div>
  );
}

export default Sinal;
