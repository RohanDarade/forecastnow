import React, { useState } from "react";
import "../styles/LandingPage.css";
import {Navigate, useNavigate} from "react-router-dom";



const LandingPage = () => {

  const navigate = useNavigate();

  const [city, setCity] = useState("");

  const handleKeyDown = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      event.preventDefault();

      console.log(city);

      console.log("User pressed Enter ✅");
     
    }
  };
  const passingValue = city;


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
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter City..."
              value={city}
              onChange={(event) => setCity(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className="submit-btn"
              onClick={() => {return(
                {handleKeyDown},
                navigate("/Weather", {state:{name:{passingValue}}})
              ) }}
            >
              Get weather
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

// style={{backgroundImage : `url(${LandingImg})`}}
