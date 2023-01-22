import React, { useState } from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const [city, setCity] = useState("");

  const handleKeyDown = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      event.preventDefault();

      // 👇️ access input value from state
      console.log(city);

      // 👇️ access input value from event object
      // console.log(event.target.value)

      console.log("User pressed Enter ✅");
    }
  };

  return (
    <div className="landing-container">
      <div className="flex flex-container-1">
        <div className="logo">ForecastNow</div>
        <div className="landing-text">
          Accurate, real-time weather forecasts at your fingertips
        </div>
      </div>
      <div className="flex flex-container-2">
        <div className="input-text">
          Enter city name to check weather
          <form>
          <button type="submit" className="submit-btn" onClick={handleKeyDown}>
              Get weather
            </button>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              onKeyDown={handleKeyDown}
            />
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

// style={{backgroundImage : `url(${LandingImg})`}}
