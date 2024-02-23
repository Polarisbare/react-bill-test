/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-23 10:11:22
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-23 10:12:39
 * @FilePath: /react-bill-test/craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
