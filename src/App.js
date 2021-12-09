import "./styles.css";
import { useState } from "react";
const emojiDictionary = {
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "🏔️": "Snow-Capped Mountain",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏕️": " Camping",
  "🏖️": " Beach with Umbrella",
  "🏜️": " Desert",
  "🏝️": " Desert Island",
  "🏞️": " National Park",
  "🏟️": " Stadium",
  "🏛️": " Classical Building",
  "🏗️": " Building Construction"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    searchEmojiMeaning(userInput);
  }

  function emojiClickHandler(emoji) {
    searchEmojiMeaning(emoji);
  }

  function searchEmojiMeaning(userInput) {
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = " We don't have this in out database";
    }
    if (userInput === "") {
      meaning = "";
    }
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know Emojis</h1>
      <input onChange={emojiInputHandler} />
      <div className="meaning">{emojiMeaning}</div>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
