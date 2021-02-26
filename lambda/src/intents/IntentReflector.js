"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentReflectorHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
exports.IntentReflectorHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = ask_sdk_core_1.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
