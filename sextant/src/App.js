import './App.css';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';

function App() {
  return (
    <div className="App">
      <Banner bannerText='Sextant'></Banner>
      <Exhibit exhibitHeader="Exhibit Example 1"></Exhibit>
      <Exhibit exhibitHeader="Exhibit Example 2"></Exhibit>
    </div>
  );
}

export default App;
