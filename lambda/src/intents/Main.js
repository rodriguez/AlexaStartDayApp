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
const helpers_1 = require("../lib/helpers");
// let speakOutput: Promise<string>;
const createMainResponse = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const responseBody = yield helpers_1.axiosGetCall(url);
    const wordArray = responseBody.options.map((obj) => obj.value);
    return 'Here\'s what you can do: '.concat(wordArray.join(', '));
});
// const axiosCall = (): Promise<string> => {
//     let speakOutput = 'Here\'s what you can do: ';
//     return new Promise((resolve, reject) => {
//         axios.get('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json')
//             .then(
//                 (response: AxiosResponse): void => {
//                     const body: { options: [{ label: string, value: string }] } = response.data;
//                     console.log(body);
//                     const wordArray: string[] = body.options.map((obj: { label: string, value: string }) => obj.value);
//                     console.log(wordArray.join(', '));
//                     speakOutput = speakOutput.concat(wordArray.join(', '));
//                     resolve(speakOutput);
//                 },
//                 (error: AxiosError): void => {
//                     reject('This resulted in an error.');;
//                 }
//             );
//     })
// }
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
            const speakOutput = yield createMainResponse('https://raw.githubusercontent.com/rodriguez/personal-json-apis/main/db.json');
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        });
    }
};
