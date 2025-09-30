import React, { useState } from "react";

const Batsman = ({ name }) => {
  const [runs, setRuns] = useState(0);
  const [out, setOut] = useState(false);
const [six, setSix]= useState(0);
  const handleFour = () => {
    const newRuns = runs + 4;
    setRuns(newRuns);
  };

  const handleSix = () => {
    const newRuns = runs + 6;
    const totalSix = six+1;
    setSix(totalSix)
    setRuns(newRuns);
  };

  const handleOut = () => {
    setOut(true);
    setRuns(runs)
  };

  return (
    <div className="border-4 border-red-900 text-center items-center my-3 py-4 rounded-2xl">
      <h3>Batsman Name: {name} </h3>
      <p>Runs:{runs}</p>
      <p>Total Six: {six}</p>
      {runs >= 50 && <p> 💖💖🌻🌻🌻🌻Congratulations💖💖🌻🌻🌻🌻</p>}
      {runs >=100 && <p>🌻🌻🌻Congratulations for your briliant century🌻🌻</p>}
      {out && <p>😢😢😢😢😢😢😢Better Luck Next time. Your score was {runs}</p>}
      <div>
        <button onClick={handleFour} className="btn btn-soft btn-success mr-4">
          Four
        </button>
        <button onClick={handleSix} className="btn btn-soft btn-warning mr-4">
          Six
        </button>
        <button onClick={handleOut} className="btn btn-soft btn-warning mr-4">
          Out
        </button>
      </div>
    </div>
  );
};

export default Batsman;
