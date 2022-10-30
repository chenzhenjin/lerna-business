import React from "react";

import { IBaseComponentProps } from "../../typings/components";

export interface ITestProps extends IBaseComponentProps {
  /**
   * 标题
   */
  title: React.ReactNode;
  /**
   * 内容
   */
  content: React.ReactNode;
}

const defaultProps: ITestProps = {
  title: "标题",
  content: "内容444",
};

const prefixCls = "p-test";

/**
 * 展示标题和内容
 */
export const Test: {
  (props: ITestProps): JSX.Element | null;
} = (p: ITestProps) => {
  const props = { ...defaultProps, p };
  const { title, content } = props;

  return (
    <div className={`${prefixCls}__content`}>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};
