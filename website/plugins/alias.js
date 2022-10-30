/*
 * @Author: OBKoro1
 * @Date: 2022-09-10 16:57:23
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-09-10 18:31:22
 * @FilePath: /lern-business/website/plugins/alias.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
const path = require('path');

module.exports = function () {
  return {
    name: 'alias-docusaurus-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            // 支持当前正在开发组件依赖包（这样依赖包就无需构建，可直接在文档中使用）
            'bs-components': path.resolve(__dirname, '../../packages/components/src'),
            $packagesComponents: path.resolve(__dirname, '../../packages/components/src/components'), // 用于缩短文档路径
            $websiteDemo: path.resolve(__dirname, '../demo'), // 用于缩短文档路径
          },
        },
      };
    },
  };
};
