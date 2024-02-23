import { Outlet } from "react-router-dom";
/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-23 14:17:25
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-23 14:28:29
 * @FilePath: /react-bill-test/src/pages/Layout/index.js
 * @Description: Layout页面
 */
const Layout = () => {
  return (
    <div>
      我是layout
      <Outlet />
    </div>
  );
};
export default Layout;
