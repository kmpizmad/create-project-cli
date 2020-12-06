"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCli = void 0;
const commander_1 = __importDefault(require("commander"));
const process_1 = require("process");
exports.parseCli = () => {
    commander_1.default.parse(process_1.argv);
};
