"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
// const Alexa = require('ask-sdk-core');
const ask_sdk_core_1 = require("ask-sdk-core");
const intents_1 = require("./src/intents");
const errors_1 = require("./src/errors");
// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = ask_sdk_core_1.SkillBuilders.custom()
    .addRequestHandlers(intents_1.LaunchRequestHandler, intents_1.HelpIntentHandler, intents_1.CancelAndStopIntentHandler, intents_1.SessionEndedRequestHandler, intents_1.IntentReflectorHandler)
    .addErrorHandlers(errors_1.GenericErrorHandler)
    .lambda();
