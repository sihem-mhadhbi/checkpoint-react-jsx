import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import photo from "./sihem.jpg";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <img src={photo} className="sihem" alt="sihem" />
        <FullName />
        <Address />
        <ProfilePhoto />
      </header>
    </div>
  );
}

export default App;
