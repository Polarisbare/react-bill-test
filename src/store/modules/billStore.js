/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-23 16:02:44
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-23 16:29:01
 * @FilePath: /react-bill-test/src/pages/store/modules/billStore.js
 * @Description: 账单列表相关store
 */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: "bill",
  // 数据状态state
  initialState: {
    billList: [],
  },
  // 同步修改方法
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});
// 结构出来actionCreater
const { setBillList } = billStore.actions;
// 编写异步代码
const getBillList = () => {
  return async (dispatch) => {
    // 异步请求
    const res = await axios.get("http://localhost:8888/ka");
    // 触发同步reducer
    dispatch(setBillList(res.data));
  };
};

export { getBillList };
// 导出reducer
const reducer = billStore.reducer;
export default reducer;
