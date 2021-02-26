"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpIntentHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
exports.HelpIntentHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Help Handler';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
