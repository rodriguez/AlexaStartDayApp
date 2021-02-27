import {
    HandlerInput,
    RequestHandler,
    getRequestType,
} from 'ask-sdk-core';

import axios, { AxiosResponse } from 'axios';

export const MainRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'MainRequest';
    },
    handle(handlerInput: HandlerInput) {
        let speakOutput = 'Here\'s what you can do: ';
        axios.get('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json')
            .then((response: AxiosResponse): void => {
                const body: { options: [{ label: string, value: string }] } = response.data;
                const wordArray: string[] = body.options.map((obj: { label: string, value: string }) => obj.value);
                speakOutput = speakOutput.concat(wordArray.join(', '))
            })
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};