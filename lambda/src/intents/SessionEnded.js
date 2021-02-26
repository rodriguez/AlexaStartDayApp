"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEndedRequestHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
exports.SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};
