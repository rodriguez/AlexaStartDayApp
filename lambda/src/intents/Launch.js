"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchRequestHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
exports.LaunchRequestHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Good Morning Andres. Go fuck yourself.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
