import './App.css';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import IP from './IPGetter.js';
import Websock from './websocket';

function App() {
  return (
    <div className="App">
      <Banner bannerText='Sextant'></Banner>
      <Exhibit exhibitHeader="IPAddress v4"><IP link="https://api.ipify.org?format=json"></IP></Exhibit>
      <Exhibit exhibitHeader="IPAddress v6"><IP link="https://api64.ipify.org?format=json"></IP></Exhibit>
      <Exhibit exhibitHeader="Time Since Last Packet"><Websock socket="ws://localhost:55455"></Websock></Exhibit>
    </div>
  );
}

export default App;
