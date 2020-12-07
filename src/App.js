import React, { useState } from "react";

import "./styles.css";

const gameDB = {
  Action: [
    {
      name: "Grand Theft Auto 5",
      rating: "4.5 / 5"
    },
    {
      name: "God of War",
      rating: "4.7 / 5"
    },
    {
      name: "Call of Duty Warzone",
      rating: "4.5 / 5"
    }
  ],
  Multiplayer: [
    {
      name: "League of Legends",
      rating: "5 / 5"
    },
    {
      name: "Mortal Kombat",
      rating: "4 / 5"
    }
  ],
  Adventure: [
    {
      name: "The Last of Us",
      rating: "4.7 / 5"
    },
    {
      name: "Red Dead Redemption 2",
      rating: "4.5 / 5"
    }
  ]
};

var games = Object.keys(gameDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h2>
        <span>🎮</span> Games
      </h2>
      <p>
        Checkout my Favourite Games.
        <br />
        Select a Genre to see my Favourite Games.
      </p>
      <div>
        {games.map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gameDB[selectedGenre].map((games) => (
            <li key={games.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {games.name} </div>
              <div style={{ fontSize: "smaller" }}> {games.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
