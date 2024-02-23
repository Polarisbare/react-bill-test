import { Button } from "antd-mobile";
import { Outlet } from "react-router-dom";
/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-23 14:17:25
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-23 14:41:04
 * @FilePath: /react-bill-test/src/pages/Layout/index.js
 * @Description: Layout页面
 */
const Layout = () => {
  return (
    <div>
      我是layout
      <Outlet />
      {/* 测试全局生效样式 */}
      <Button color="primary">测试全局</Button>
      <div className="puple">
        {/* 测试局部生效样式 */}
        <Button color="primary">测试局部</Button>
      </div>
    </div>
  );
};
export default Layout;
