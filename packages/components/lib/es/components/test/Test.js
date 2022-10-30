import React from "react";
const defaultProps = {
  title: "标题",
  content: "内容444"
};
const prefixCls = "p-test";
/**
 * 展示标题和内容
 */
export const Test = p => {
  const props = Object.assign(Object.assign({}, defaultProps), {
    p
  });
  const {
    title,
    content
  } = props;
  return React.createElement("div", {
    className: `${prefixCls}__content`
  }, React.createElement("div", null, title), React.createElement("div", null, content));
};