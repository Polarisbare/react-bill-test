/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-23 14:17:25
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-23 16:16:15
 * @FilePath: /react-bill-test/src/pages/Layout/index.js
 * @Description: Layout页面
 */
import { Button } from "antd-mobile";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBillList } from "../../store/modules/billStore";
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
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
