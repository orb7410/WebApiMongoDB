// import { Counter } from "./components/Counter";
// import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import New from "./components/New";
import Edit from "./components/Edit";
import Find from "./components/Find";

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
  },
  {
    path: '/find',
    element: <Find />
  }
];

export default AppRoutes;
