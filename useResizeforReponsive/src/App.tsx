import { useState } from "react";

import "./App.css";
import Useresize from "./Hooks/Useresize";

function App() {
  const [windowSize] = Useresize();
  console.log("sizeWindow", windowSize);

  function SmallDevice() {
    return (
      <h2 style={{ backgroundColor: "yellow", color: "green" }}>
        Khi màn hình nhỏ thì show cái này
      </h2>
    );
  }

  function LargeDevice() {
    return (
      <h2 style={{ backgroundColor: "red", color: "white" }}>
        Khi màn hình lớn thì show cái này
      </h2>
    );
  }

  //show Device when width change

  function Reponsive() {
    if (windowSize.width < 1000) {
      return <SmallDevice />;
    } else {
      return <LargeDevice />;
    }
  }
  return (
    <>
      <div>
        <p>ReSize window</p>
        <p>
          Height:{" "}
          <span className="style">
            {windowSize.height}
          </span>
        </p>
        <p>
          Width:{" "}
          <span className="style">
            {windowSize.width}
          </span>
        </p>

        <Reponsive />
      </div>
    </>
  );
}

export default App;
