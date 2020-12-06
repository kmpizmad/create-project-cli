"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const initializeCli_1 = require("./cli/initializeCli");
const parseCli_1 = require("./cli/parseCli");
exports.cli = () => {
    initializeCli_1.initializeCli();
    // Commands here..
    parseCli_1.parseCli();
};
