import './App.css';
import Emojibox from './Components/emojibox'
import emojiList from './emojis'

function App() {
  const emoji = require("./emojis.js");
  var random = Math.floor(Math.random() * emojiList.length);
  var selectedEmoji = emojiList[random].text;
  return (
    <div id = "container">
          <Emojibox id = "emoji" text={selectedEmoji}></Emojibox>
    </div>
  );
}

export default App;
