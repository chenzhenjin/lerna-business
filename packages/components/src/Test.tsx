/*
 * @Author: OBKoro1
 * @Date: 2022-09-10 16:55:18
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-09-10 17:53:25
 * @FilePath: /lern-business/packages/components/src/Test.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
import React from 'react';

export interface ProContentProps {
  /**
   * 标题 可为文本和react节点
   */
  title?: React.ReactNode;
  /**
   * 内容
   */
  content: React.ReactNode;
}
/**
 * 展示标题和内容
 */
const Test: {
  (props: ProContentProps): JSX.Element | null;
  displayName: string;
  defaultProps?: Record<string, any>;
} = (props: ProContentProps) => {
  const { title, content } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

Test.displayName = 'Card';

Test.defaultProps = {
  title: '标题',
  content: "内容",
};

export default Test;