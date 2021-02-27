import {
    HandlerInput,
    RequestHandler,
    getRequestType,
    getIntentName,
} from 'ask-sdk-core';

import axios, { AxiosError, AxiosResponse } from 'axios';

// let speakOutput: Promise<string>;

const axiosCall = (): Promise<string> => {
    let speakOutput = 'Here\'s what you can do: ';
    return new Promise((resolve, reject) => {
        axios.get('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json')
            .then(
                (response: AxiosResponse): void => {
                    const body: { options: [{ label: string, value: string }] } = response.data;
                    console.log(body);
                    const wordArray: string[] = body.options.map((obj: { label: string, value: string }) => obj.value);
                    console.log(wordArray.join(', '));
                    speakOutput = speakOutput.concat(wordArray.join(', '));
                    resolve(speakOutput);
                },
                (error: AxiosError): void => {
                    reject('This resulted in an error.');;
                }

            );
    })
}

export const MainRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput) {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && getIntentName(handlerInput.requestEnvelope) === 'Main';
    },
    async handle(handlerInput: HandlerInput) {
        // let speakOutput = 'Here\'s what you can do: ';
        // axios.get('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json')
        //     .then((response: AxiosResponse): void => {
        //         const body: { options: [{ label: string, value: string }] } = response.data;
        //         const wordArray: string[] = body.options.map((obj: { label: string, value: string }) => obj.value);
        //         speakOutput = speakOutput.concat(wordArray.join(', '))
        // });
        const response: string = await axiosCall();
        return handlerInput.responseBuilder
            .speak(response)
            .reprompt(response)
            .getResponse();
    }
};