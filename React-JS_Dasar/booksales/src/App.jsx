import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/Pages";
import Books from "./components/Pages/Books";
import Teams from "./components/Pages/Teams";
import Contacts from "./components/Pages/Contacts";
import Login from "./components/Pages/auth/login";
import Register from "./components/Pages/auth/register";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="books" element={<Books/>}/>
            <Route path="teams" element={<Teams/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;