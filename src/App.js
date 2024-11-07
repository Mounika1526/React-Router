//import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Login from "./Login";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/about"> About </Link>
      </li>
      <li>
        <Link to="/Contact"> Contacct </Link>
      </li>
      <li>
        <Link to="/login"> Login </Link>
      </li>
    </ul>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>This is for routing</div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

    // <>
    //   <div className="App"> App Component</div>
    // </>
  );
}

export default App;
