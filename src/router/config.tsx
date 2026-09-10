import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Quiz from "../pages/quiz/page";
import Result from "../pages/result/page";
import WrongNote from "../pages/wrong-note/page";
import Gacha from "../pages/gacha/page";
import Store from "../pages/store/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/result", element: <Result /> },
  { path: "/wrong-note", element: <WrongNote /> },
  { path: "/gacha", element: <Gacha /> },
  { path: "/store", element: <Store /> },
  { path: "*", element: <NotFound /> },
];

export default routes;