import './App.css';
import Emojibox from './Components/emojibox'
import emojiList from './emojis'
import RefreshButton from './Components/refreshbutton'

function App() {
  const emoji = require("./emojis.js");
  var random = Math.floor(Math.random() * emojiList.length);
  var selectedEmoji = emojiList[random].text;
  var richard = "wei";
  return (
    <div class = "container">
          <Emojibox id = "emoji" text={selectedEmoji}></Emojibox>
          <RefreshButton></RefreshButton>
    </div>
  );
}

export default App;
