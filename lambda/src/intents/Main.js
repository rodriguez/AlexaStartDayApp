"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRequestHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const axios_1 = require("axios");
exports.MainRequestHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.getRequestType(handlerInput.requestEnvelope) === 'MainRequest';
    },
    handle(handlerInput) {
        let speakOutput = 'Here\'s what you can do: ';
        axios_1.default.get('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json')
            .then((response) => {
            const body = response.data;
            const wordArray = body.options.map((obj) => obj.value);
            speakOutput = speakOutput.concat(wordArray.join(', '));
        });
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
