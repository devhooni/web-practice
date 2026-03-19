import { useState } from "react";
import "./App.css";
import Info from "./Info.jsx";

function App() {
  const [openCard, setOpenCard] = useState(null);

  const handleFlip = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  const resetMove = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div className={`parent ${openCard ? "active" : ""}`}>
      <div
        className={`div1 card  ${openCard === 1 ? "flip active-card" : ""}`}
        onClick={() => handleFlip(1)}
        onMouseLeave={resetMove}>
        <div className="card-inner">
          <div className="card-front">Info</div>
          <div className="card-back">
            <Info />
          </div>
        </div>
      </div>

      <div
        className={`div2 card horizontal ${openCard === 2 ? "flip active-card" : ""}`}
        onClick={() => handleFlip(2)}
        onMouseLeave={resetMove}>
        <div className="card-inner">
          <div className="card-front">2</div>
          <div className="card-back">2</div>
        </div>
      </div>

      <div
        className={`div3 card horizontal ${openCard === 3 ? "flip active-card" : ""}`}
        onClick={() => handleFlip(3)}
        onMouseLeave={resetMove}>
        <div className="card-inner">
          <div className="card-front">3</div>
          <div className="card-back">3</div>
        </div>
      </div>

      <div
        className={`div4 card horizontal ${openCard === 4 ? "flip active-card" : ""}`}
        onClick={() => handleFlip(4)}
        onMouseLeave={resetMove}>
        <div className="card-inner">
          <div className="card-front">4</div>
          <div className="card-back">4</div>
        </div>
      </div>

      <div
        className={`div5 card horizontal ${openCard === 5 ? "flip active-card" : ""}`}
        onClick={() => handleFlip(5)}
        onMouseLeave={resetMove}>
        <div className="card-inner">
          <div className="card-front">5</div>
          <div className="card-back">5</div>
        </div>
      </div>

      <div
        className={`div6 card ${openCard === 6 ? "flip active-card" : ""}`}
        onClick={() => handleFlip(6)}
        onMouseLeave={resetMove}>
        <div className="card-inner">
          <div className="card-front">6</div>
          <div className="card-back">6</div>
        </div>
      </div>
    </div>
  );
}

export default App;
