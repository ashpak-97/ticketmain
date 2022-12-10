import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Customer from "./pages/Customer/Customer";
import Customerform from "./pages/Customerform/Customerform";
import List1 from './pages/list/List1'
import List2 from './pages/list/List2'
import List3 from "./pages/list/List3";
import List4 from "./pages/list/List4";
import List5 from "./pages/list/List5";
import List6 from "./pages/list/List6";
import List8 from "./pages/list/List8";
import List7 from "./pages/list/List7";
import List9 from "./pages/list/List9";
import List10 from "./pages/list/List10";
import List11 from "./pages/list/List11";
import List12 from "./pages/list/List12";
import List13 from "./pages/list/List13";
import List14 from "./pages/list/List14";
import List15 from "./pages/list/List15";
import List16 from "./pages/list/List16";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="customer">
              <Route index element={<List />} />
            </Route>
            <Route path="customerform">
              <Route index element={<List1 />} />
            </Route>
            <Route path="customerdetails/:id">
              <Route index element={<List14 />} />
            </Route>
            <Route path="ticketlist">
              <Route index element={<List3/>} />
            </Route>
            <Route path="ticketdetail/:id">
              <Route index element={<List4/>} />
            </Route>

            <Route path="ticketform">
              <Route index element={<List2/>} />
            </Route>
            
            <Route path="projectlist">
              <Route index element={<List5/>} />
            </Route>
            <Route path="projectform">
              <Route index element={<List6/>} />
            </Route>
            {/* <Route path="projectdetail">
              <Route index element={<List7/>} />
            </Route> */}
            <Route path="stafflist">
              <Route index element={<List8/>} />
            </Route>
            <Route path="staffform">
              <Route index element={<List9/>} />
            </Route>
            <Route path="worklist">
              <Route index element={<List10/>} />
            </Route>
            <Route path="workform">
              <Route index element={<List11/>} />
            </Route>
            <Route path="permissions">
              <Route index element={<List16/>} />
            </Route>
            <Route path="emailform">
              <Route index element={<List12/>} />
            </Route>
            <Route path="companyform">
              <Route index element={<List13/>} />
            </Route>
            <Route path="lastmodified">
              <Route index element={<List15/>} />
            </Route>
            <Route path="permissions">
              <Route index element={<List16/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
