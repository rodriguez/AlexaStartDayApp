import axios, { AxiosError, AxiosResponse } from "axios";

export const axiosGetCall = (url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(
            (response: AxiosResponse) => {
                resolve(response.data);
            },
            (error: AxiosError) => {
                reject(error);
            }
        );
    });
}