// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import New from "./components/New";
import Edit from "./components/Edit";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/edit',
    element: <Edit />
  },
  {
    path: '/new',
    element: <New />
  }
];

export default AppRoutes;
