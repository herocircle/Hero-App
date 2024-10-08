/* tslint:disable */
/* eslint-disable */
/**
 * hero-circle-api
 * The Hero Circle API description
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ChargeBreakdown } from '../models';
import { EventLookupDateBoundariesDto } from '../models';
/**
 * PaymentChargeApi - axios parameter creator
 * @export
 */
export const PaymentChargeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get charges
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCharges: async (body: EventLookupDateBoundariesDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getCharges.');
            }
            const localVarPath = `/charge/get-charges`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers!['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get charges in CSV format
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChargesCsv: async (body: EventLookupDateBoundariesDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getChargesCsv.');
            }
            const localVarPath = `/charge/get-charges/csv`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers!['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get charges in CSV format
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExcludedChargesCsv: async (body: EventLookupDateBoundariesDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getExcludedChargesCsv.');
            }
            const localVarPath = `/charge/get-excluded-charges/csv`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers!['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentChargeApi - functional programming interface
 * @export
 */
export const PaymentChargeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get charges
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharges(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ChargeBreakdown>>> {
            const localVarAxiosArgs = await PaymentChargeApiAxiosParamCreator(configuration).getCharges(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get charges in CSV format
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChargesCsv(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await PaymentChargeApiAxiosParamCreator(configuration).getChargesCsv(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get charges in CSV format
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExcludedChargesCsv(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await PaymentChargeApiAxiosParamCreator(configuration).getExcludedChargesCsv(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PaymentChargeApi - factory interface
 * @export
 */
export const PaymentChargeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get charges
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCharges(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig): Promise<AxiosResponse<ChargeBreakdown>> {
            return PaymentChargeApiFp(configuration).getCharges(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get charges in CSV format
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChargesCsv(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return PaymentChargeApiFp(configuration).getChargesCsv(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get charges in CSV format
         * @param {EventLookupDateBoundariesDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExcludedChargesCsv(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return PaymentChargeApiFp(configuration).getExcludedChargesCsv(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentChargeApi - object-oriented interface
 * @export
 * @class PaymentChargeApi
 * @extends {BaseAPI}
 */
export class PaymentChargeApi extends BaseAPI {
    /**
     * 
     * @summary Get charges
     * @param {EventLookupDateBoundariesDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentChargeApi
     */
    public async getCharges(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<ChargeBreakdown>> {
        return PaymentChargeApiFp(this.configuration).getCharges(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get charges in CSV format
     * @param {EventLookupDateBoundariesDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentChargeApi
     */
    public async getChargesCsv(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return PaymentChargeApiFp(this.configuration).getChargesCsv(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get charges in CSV format
     * @param {EventLookupDateBoundariesDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentChargeApi
     */
    public async getExcludedChargesCsv(body: EventLookupDateBoundariesDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return PaymentChargeApiFp(this.configuration).getExcludedChargesCsv(body, options).then((request) => request(this.axios, this.basePath));
    }
}
