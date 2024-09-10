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
import { CircleEventSubscription } from '../models';
/**
 * CircleEventsSubscriptionsApi - axios parameter creator
 * @export
 */
export const CircleEventsSubscriptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSubscription: async (eventId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling createSubscription.');
            }
            const localVarPath = `/circle-events/subscriptions/register/{eventId}`
                .replace(`{${"eventId"}}`, encodeURIComponent(String(eventId)));
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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCircleEventsSubscriptions: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling getCircleEventsSubscriptions.');
            }
            const localVarPath = `/circle-events/subscriptions/user/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCircleEventsSubscriptionsByEvent: async (eventId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling getCircleEventsSubscriptionsByEvent.');
            }
            const localVarPath = `/circle-events/subscriptions/event/{eventId}`
                .replace(`{${"eventId"}}`, encodeURIComponent(String(eventId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CircleEventsSubscriptionsApi - functional programming interface
 * @export
 */
export const CircleEventsSubscriptionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSubscription(eventId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CircleEventSubscription>>> {
            const localVarAxiosArgs = await CircleEventsSubscriptionsApiAxiosParamCreator(configuration).createSubscription(eventId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleEventsSubscriptions(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleEventSubscription>>>> {
            const localVarAxiosArgs = await CircleEventsSubscriptionsApiAxiosParamCreator(configuration).getCircleEventsSubscriptions(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleEventsSubscriptionsByEvent(eventId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<string>>>> {
            const localVarAxiosArgs = await CircleEventsSubscriptionsApiAxiosParamCreator(configuration).getCircleEventsSubscriptionsByEvent(eventId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CircleEventsSubscriptionsApi - factory interface
 * @export
 */
export const CircleEventsSubscriptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSubscription(eventId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CircleEventSubscription>> {
            return CircleEventsSubscriptionsApiFp(configuration).createSubscription(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleEventsSubscriptions(userId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleEventSubscription>>> {
            return CircleEventsSubscriptionsApiFp(configuration).getCircleEventsSubscriptions(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleEventsSubscriptionsByEvent(eventId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<string>>> {
            return CircleEventsSubscriptionsApiFp(configuration).getCircleEventsSubscriptionsByEvent(eventId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CircleEventsSubscriptionsApi - object-oriented interface
 * @export
 * @class CircleEventsSubscriptionsApi
 * @extends {BaseAPI}
 */
export class CircleEventsSubscriptionsApi extends BaseAPI {
    /**
     * 
     * @param {string} eventId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleEventsSubscriptionsApi
     */
    public async createSubscription(eventId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CircleEventSubscription>> {
        return CircleEventsSubscriptionsApiFp(this.configuration).createSubscription(eventId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleEventsSubscriptionsApi
     */
    public async getCircleEventsSubscriptions(userId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleEventSubscription>>> {
        return CircleEventsSubscriptionsApiFp(this.configuration).getCircleEventsSubscriptions(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} eventId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleEventsSubscriptionsApi
     */
    public async getCircleEventsSubscriptionsByEvent(eventId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<string>>> {
        return CircleEventsSubscriptionsApiFp(this.configuration).getCircleEventsSubscriptionsByEvent(eventId, options).then((request) => request(this.axios, this.basePath));
    }
}