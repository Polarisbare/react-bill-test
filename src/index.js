/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-23 09:48:51
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-23 16:19:25
 * @FilePath: /react-bill-test/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import sum from "@/test";
// 中间件
import { Provider } from "react-redux";
import store from "./store";

// 导入定制主题文件
import "./theme.css";

const res = sum(1, 3);
console.log("=========>res", res);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
