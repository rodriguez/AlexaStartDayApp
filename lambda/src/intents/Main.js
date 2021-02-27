"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRequestHandler = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const axios_1 = require("axios");
// let speakOutput: Promise<string>;
const axiosCall = () => {
    let speakOutput = 'Here\'s what you can do: ';
    return new Promise((resolve, reject) => {
        axios_1.default.get('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json')
            .then((response) => {
            const body = response.data;
            console.log(body);
            const wordArray = body.options.map((obj) => obj.value);
            console.log(wordArray.join(', '));
            speakOutput = speakOutput.concat(wordArray.join(', '));
            resolve(speakOutput);
        }, (error) => {
            reject('This resulted in an error.');
            ;
        });
    });
};
exports.MainRequestHandler = {
    canHandle(handlerInput) {
        return ask_sdk_core_1.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && ask_sdk_core_1.getIntentName(handlerInput.requestEnvelope) === 'Main';
    },
    handle(handlerInput) {
        return __awaiter(this, void 0, void 0, function* () {
            // let speakOutput = 'Here\'s what you can do: ';
            // axios.get('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json')
            //     .then((response: AxiosResponse): void => {
            //         const body: { options: [{ label: string, value: string }] } = response.data;
            //         const wordArray: string[] = body.options.map((obj: { label: string, value: string }) => obj.value);
            //         speakOutput = speakOutput.concat(wordArray.join(', '))
            // });
            const response = yield axiosCall();
            return handlerInput.responseBuilder
                .speak(response)
                .reprompt(response)
                .getResponse();
        });
    }
};
