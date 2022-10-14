import React from "react";
import "./styles.css";
import { useState } from "react";

const athDB = {
  javelin: [
    { name: "Anderson PETERS", ranking: "1" },
    { name: "Neeraj CHOPRA", ranking: "2" }
  ],

  running: [
    {
      name: "STrayvon BROMELL",
      ranking: "1"
    },
    {
      name: "Fred KERLEY",
      ranking: "2"
    }
  ],
  tennis: [
    {
      name: "Carlos Alcaraz",
      ranking: "1"
    },
    {
      name: "Casper Ruud",
      ranking: "2"
    }
  ]
};

export default function App() {
  const [selectedSport, setSport] = useState("tennis");
  function sportClickHandler(sport) {
    setSport(sport);
  }
  return (
    <div className="App">
      <h1> Top Athletes! </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout top athletes from different sports!{" "}
      </p>

      <div>
        {Object.keys(athDB).map((sport) => (
          <button
            onClick={() => sportClickHandler(sport)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {sport}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {athDB[selectedSport].map((person) => (
            <li
              key={person.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {person.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                World ranking - {person.ranking}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
