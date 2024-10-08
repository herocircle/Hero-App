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
import { CircleEventRsvpByUserListLine } from '../models';
import { CircleEventRsvpDto } from '../models';
import { PopulatedCircleEventRsvpListByEventDto } from '../models';
/**
 * CircleEventsRsvpApi - axios parameter creator
 * @export
 */
export const CircleEventsRsvpApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRsvpList: async (eventId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling getRsvpList.');
            }
            const localVarPath = `/circle-events/rsvp/{eventId}`
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
        /**
         * 
         * @summary Get list of RSVP of an user
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRsvpListByUser: async (username: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling getRsvpListByUser.');
            }
            const localVarPath = `/circle-events/rsvp/user/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
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
         * @summary Get RSVP status of an event
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRsvpStatus: async (eventId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling getRsvpStatus.');
            }
            const localVarPath = `/circle-events/rsvp/{eventId}/me`
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
         * @param {CircleEventRsvpDto} body 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rsvpToEvent: async (body: CircleEventRsvpDto, eventId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling rsvpToEvent.');
            }
            // verify required parameter 'eventId' is not null or undefined
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling rsvpToEvent.');
            }
            const localVarPath = `/circle-events/rsvp/{eventId}`
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
 * CircleEventsRsvpApi - functional programming interface
 * @export
 */
export const CircleEventsRsvpApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRsvpList(eventId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<PopulatedCircleEventRsvpListByEventDto>>>> {
            const localVarAxiosArgs = await CircleEventsRsvpApiAxiosParamCreator(configuration).getRsvpList(eventId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get list of RSVP of an user
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRsvpListByUser(username: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleEventRsvpByUserListLine>>>> {
            const localVarAxiosArgs = await CircleEventsRsvpApiAxiosParamCreator(configuration).getRsvpListByUser(username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get RSVP status of an event
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRsvpStatus(eventId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CircleEventsRsvpApiAxiosParamCreator(configuration).getRsvpStatus(eventId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CircleEventRsvpDto} body 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rsvpToEvent(body: CircleEventRsvpDto, eventId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CircleEventsRsvpApiAxiosParamCreator(configuration).rsvpToEvent(body, eventId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CircleEventsRsvpApi - factory interface
 * @export
 */
export const CircleEventsRsvpApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRsvpList(eventId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<PopulatedCircleEventRsvpListByEventDto>>> {
            return CircleEventsRsvpApiFp(configuration).getRsvpList(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get list of RSVP of an user
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRsvpListByUser(username: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleEventRsvpByUserListLine>>> {
            return CircleEventsRsvpApiFp(configuration).getRsvpListByUser(username, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get RSVP status of an event
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRsvpStatus(eventId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CircleEventsRsvpApiFp(configuration).getRsvpStatus(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CircleEventRsvpDto} body 
         * @param {string} eventId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rsvpToEvent(body: CircleEventRsvpDto, eventId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CircleEventsRsvpApiFp(configuration).rsvpToEvent(body, eventId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CircleEventsRsvpApi - object-oriented interface
 * @export
 * @class CircleEventsRsvpApi
 * @extends {BaseAPI}
 */
export class CircleEventsRsvpApi extends BaseAPI {
    /**
     * 
     * @param {string} eventId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleEventsRsvpApi
     */
    public async getRsvpList(eventId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<PopulatedCircleEventRsvpListByEventDto>>> {
        return CircleEventsRsvpApiFp(this.configuration).getRsvpList(eventId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get list of RSVP of an user
     * @param {string} username 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleEventsRsvpApi
     */
    public async getRsvpListByUser(username: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleEventRsvpByUserListLine>>> {
        return CircleEventsRsvpApiFp(this.configuration).getRsvpListByUser(username, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get RSVP status of an event
     * @param {string} eventId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleEventsRsvpApi
     */
    public async getRsvpStatus(eventId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CircleEventsRsvpApiFp(this.configuration).getRsvpStatus(eventId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CircleEventRsvpDto} body 
     * @param {string} eventId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleEventsRsvpApi
     */
    public async rsvpToEvent(body: CircleEventRsvpDto, eventId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CircleEventsRsvpApiFp(this.configuration).rsvpToEvent(body, eventId, options).then((request) => request(this.axios, this.basePath));
    }
}
