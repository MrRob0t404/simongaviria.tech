import "./App.css";

import NavBar from "./Components/NavBar";
import TopSection from "./Components/TopSection";
import MiddleSection from "./Components/MiddleSection";
import SideContent from "./Components/SideContent";

function App() {
  return (
    <div id="main">
      <div id="content-wrapper">
        <NavBar />
        <div id="main-content">
          <div id="main-content-container">
            <TopSection />
            <MiddleSection />
          </div>
          <div id="side-content-container">
            <SideContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
