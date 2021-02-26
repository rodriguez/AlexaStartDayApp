// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
// const Alexa = require('ask-sdk-core');
import {
    SkillBuilders,
    LambdaHandler
} from 'ask-sdk-core';
import { 
    LaunchRequestHandler, 
    HelpIntentHandler, 
    CancelAndStopIntentHandler, 
    SessionEndedRequestHandler,
    IntentReflectorHandler 
} from './src/intents';
import {
    GenericErrorHandler
} from './src/errors';

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
export const handler: LambdaHandler = SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        GenericErrorHandler
    )
    .lambda();
