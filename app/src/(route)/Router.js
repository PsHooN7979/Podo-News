import StartPage from "../domains/start/StartPage";
import UserInfoRegistPage from "../domains/registration/UserInfoRegistPage";
import MainPage from "../domains/home/MainPage";
import PrescPage from "../domains/prescList/PrescPage";


import { Routes, Route, HashRouter } from "react-router-dom";

function AppRouter() {
  return (
    /**
     * June. SSR routing refactoring
     */
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/first" element={<UserInfoRegistPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/presc" element={<PrescPage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
