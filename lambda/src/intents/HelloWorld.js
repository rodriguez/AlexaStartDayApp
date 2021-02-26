"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldIntentHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
exports.HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && ask_sdk_core_1.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'This can be whatever you want to be.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
