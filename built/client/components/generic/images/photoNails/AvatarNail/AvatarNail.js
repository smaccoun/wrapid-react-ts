"use strict";
const React = require("react");
const avatarImg = require('../../../../../assets/images/theraccounATgmailDOTcom.jpg');
const s = require('./style.css');
const AvatarNail = () => {
    console.log(avatarImg);
    return (React.createElement("img", { src: `${avatarImg}`, className: s.container }));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AvatarNail;
//# sourceMappingURL=AvatarNail.js.map