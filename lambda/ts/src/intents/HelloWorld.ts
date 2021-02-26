import {
    HandlerInput,
    RequestHandler,
    getRequestType,
    getIntentName
  } from 'ask-sdk-core';

export const HelloWorldIntentHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput: HandlerInput) {
        const speakOutput = 'This can be whatever you want to be.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};