"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCli = void 0;
const commander_1 = __importDefault(require("commander"));
const __1 = require("..");
exports.initializeCli = () => {
    commander_1.default
        .name("create-project")
        .version(__1.version, "-v, --version")
        .description(__1.description);
};
