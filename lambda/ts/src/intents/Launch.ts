import {
    HandlerInput,
    RequestHandler,
    getRequestType,
  } from 'ask-sdk-core';

export const LaunchRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput: HandlerInput) {
        const speakOutput = 'Good Morning Andres. Subarashi Ningen.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};