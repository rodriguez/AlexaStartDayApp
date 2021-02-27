"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosGetCall = void 0;
const axios_1 = require("axios");
const axiosGetCall = (url) => {
    return new Promise((resolve, reject) => {
        axios_1.default.get(url).then((response) => {
            resolve(response.data);
        }, (error) => {
            reject(error);
        });
    });
};
exports.axiosGetCall = axiosGetCall;
