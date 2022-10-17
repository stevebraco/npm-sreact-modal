"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    isOpen,
    onRequestClose,
    children
  } = _ref;
  if (isOpen) {
    return /*#__PURE__*/_react.default.createElement("div", {
      onClick: onRequestClose,
      className: "container-modal"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal"
    }, children));
  }
};
var _default = Modal;
exports.default = _default;