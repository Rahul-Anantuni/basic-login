import React, { useState, useEffect } from "react";
import richard from "./richard.png";

const WorstLoginPageEver = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitPosition, setSubmitPosition] = useState({
    top: "50%",
    left: "50%",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSubmitPosition({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Something is wrong, but we won't tell you what.");
      return;
    }

    if (Math.random() < 0.5) {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setUsername("");
      setPassword("");
      setErrorMessage("Please start over, you did something wrong.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}! You're logged in... or are you?</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout (or not)</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Worst Login Page Ever</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <p style={{ fontSize: "20px", marginTop: "20px", color: "blue" }}>
            Catch the Richard to submit
          </p>

          <img
            src={richard}
            alt="Submit Button"
            onClick={handleSubmit}
            style={{
              position: "absolute",
              top: submitPosition.top,
              left: submitPosition.left,
              padding: "10px 20px",
              cursor: "pointer",
              width: "500px",
              height: "500px",
            }}
          />
        </form>
      )}
    </div>
  );
};

export default WorstLoginPageEver;
