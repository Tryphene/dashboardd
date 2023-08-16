import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route exact path="/" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
