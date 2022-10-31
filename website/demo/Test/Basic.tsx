import React from 'react';
import { Test } from 'brotherstudy-components';
import './Basic.scss';

const prefixCls = "basic"

const Default = function () {
  return (
    <div className={`${prefixCls}__content`}>
      <Test title="标题" content="内容"/>
    </div>
  )
};

export default Default;