import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Hook from "../pages/Hook";
// import News from "../pages/News";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Hook" element={<Hook />}></Route>
      {/* <Route path="/News" element={<News />}></Route> */}
      <Route path="/About" element={<About />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

export default router;
