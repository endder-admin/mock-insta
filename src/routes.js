import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import MyPage from "./pages/mypage";
import Saveinfo from "./pages/saveinfo";
import OtherPage from "./pages/otherpage";
// import About from "./pages/About";
// import Settings from "./pages/Settings";
// import LoggedInLayout from "./layouts/LoggedInLayout";
// import GuestLayout from "./layouts/GuestLayout";
// import Login from "./pages/Login";
// import ArticleUpdate from "./pages/ArticleUpdate";
// import ArticleNew from "./pages/ArticleNew";

const Router = () => {
  return (
    <Routes>
      {/* <Route element={<LoggedInLayout />}> */}
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="saveinfo" element={<Saveinfo />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="otherpage" element={<OtherPage />} />
      {/* <Route path="about" element={<About />} />
        <Route path="settings" element={<Settings />} />
        <Route path="article/:slug" element={<ArticleUpdate />} />
        <Route path="article/new" element={<ArticleNew />} /> */}
      {/* </Route> */}
      {/* <Route element={<GuestLayout />}>
        <Route path="login" element={<Login />} />
      </Route> */}
    </Routes>
  );
};

export default Router;
