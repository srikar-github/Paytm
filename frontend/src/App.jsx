import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Dashboard from "../Pages/Dashboard";
import Sendmoney from "../Pages/Sendmoney";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element = {<Signup />}></Route>
        <Route path="/signin" element = {<Signin />}></Route>
        <Route path="/dashboard" element = {<Dashboard />}></Route>
        <Route path="/sendmoney" element = {<Sendmoney />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
