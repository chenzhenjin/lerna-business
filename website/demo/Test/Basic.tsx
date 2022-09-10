/*
 * @Author: OBKoro1
 * @Date: 2022-09-10 17:06:13
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-09-10 18:18:55
 * @FilePath: /lern-business/website/demo/Test/Basic.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
import React from 'react';
import { Test } from 'bs-components';
import './Basic.css';

const Default = function () {
  return (
    <div className="pro-content-demo-container">
      <Test title="标题123456" content="内容"/>
    </div>
  )
};

export default Default;