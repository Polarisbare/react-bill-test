/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-23 14:17:25
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-26 13:56:49
 * @FilePath: /react-bill-test/src/pages/Layout/index.js
 * @Description: Mouth 页面
 */
import { NavBar, DatePicker } from "antd-mobile";
// import { useEffect, useState } from "react";
import "./index.scss";
// import classNames from "classnames";
// import dayjs from "dayjs";
// import { useSelector } from "react-redux";
// import { useMemo } from "react";
// import _ from "lodash";
// import DailyBill from "./components/DayBill";
const Month = () => {
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date">
            <span className="text">2024 | 2月账单</span>
            {/* 思路：根据当前弹框打开的状态控制expand类名是否存在 */}
            <span className="arrow expand"></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">100</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">100</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">100</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={false}
            max={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default Month;
