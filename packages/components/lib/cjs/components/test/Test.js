"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const defaultProps = {
  title: "标题",
  content: "内容444"
};
const prefixCls = "p-test";
/**
 * 展示标题和内容
 */
const Test = p => {
  const props = Object.assign(Object.assign({}, defaultProps), {
    p
  });
  const {
    title,
    content
  } = props;
  return _react.default.createElement("div", {
    className: `${prefixCls}__content`
  }, _react.default.createElement("div", null, title), _react.default.createElement("div", null, content));
};
exports.Test = Test;