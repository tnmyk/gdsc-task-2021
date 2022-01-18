import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Layout/Nav";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
