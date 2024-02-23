// 创建路由实例 绑定path element
import Layout from "@/pages/Layout";
import New from "@/pages/New";
import Mouth from "@/pages/Mouth";
import Year from "@/pages/Year";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "month",
        element: <Mouth />,
      },
      {
        path: "year",
        element: <Year />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
  },
]);

export default router;
