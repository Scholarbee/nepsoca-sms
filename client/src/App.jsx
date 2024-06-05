import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from "./pages/global/LandingPage";
import "./App.css";
import StaffLogin from "./pages/staff/StaffLogin";
import StudentLogin from "./pages/student/StudentLogin";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" Component={LandingPage}></Route>
          <Route path="/staff/login" Component={StaffLogin}></Route>
          <Route path="/student/login" Component={StudentLogin}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
