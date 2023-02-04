import "./App.css";
import { useState, useEffect } from "react";
import getRandomAdvice from "./logic/getRandomAdvice";

function App() {
  const [advice, setAdvice] = useState({});

  const fetchRandomAdvice = async () => {
    const myRandomAdvice = await getRandomAdvice();
    setAdvice(myRandomAdvice);
  };

  useEffect(() => {
    fetchRandomAdvice();
  }, []);

  return (
    <div id="app-flex-container" height="100%" width="100%">
      <div className="advice-box">
        <div className="advice-container">
          <div className="advice-heading">Your advice #{advice.id}</div>
          <div className="quote">"{advice.text}"</div>
        </div>
        <div className="pattern-divider">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="dice-box" onClick={fetchRandomAdvice}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
