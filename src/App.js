import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser/CreateUser";
import Details from "./pages/Details/Details";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Update from "./pages/Update/Update";
import Weather from "./pages/Weather/Weather";
import "./Dark/Dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./Context/DarkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="home" element={<Home />} />
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="weather" element={<Weather />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Details />} />
              <Route path="createuser" element={<CreateUser />} />
              <Route path="update/:userId" element={<Update />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
