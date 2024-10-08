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
import { ActiveCircleSubscriptionsByTierDto } from '../models';
import { CircleSubscription } from '../models';
import { CircleSubscriptionResponseDto } from '../models';
/**
 * CircleSubscriptionsApi - axios parameter creator
 * @export
 */
export const CircleSubscriptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exportSubscriptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/circle-subscriptions/csv`;
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
         * @param {string} circle 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCircleSubscriptions: async (circle: string, active: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'circle' is not null or undefined
            if (circle === null || circle === undefined) {
                throw new RequiredError('circle','Required parameter circle was null or undefined when calling getAllCircleSubscriptions.');
            }
            // verify required parameter 'active' is not null or undefined
            if (active === null || active === undefined) {
                throw new RequiredError('active','Required parameter active was null or undefined when calling getAllCircleSubscriptions.');
            }
            const localVarPath = `/circle-subscriptions/all`;
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

            if (circle !== undefined) {
                localVarQueryParameter['_circle'] = circle;
            }

            if (active !== undefined) {
                localVarQueryParameter['active'] = active;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSubscribedUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/circle-subscriptions/sub`;
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
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUserCircleSubscriptions: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getAllUserCircleSubscriptions.');
            }
            const localVarPath = `/circle-subscriptions/user/{id}/all`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @param {string} circle 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCircleActiveSubscriptions: async (circle: string, active: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'circle' is not null or undefined
            if (circle === null || circle === undefined) {
                throw new RequiredError('circle','Required parameter circle was null or undefined when calling getCircleActiveSubscriptions.');
            }
            // verify required parameter 'active' is not null or undefined
            if (active === null || active === undefined) {
                throw new RequiredError('active','Required parameter active was null or undefined when calling getCircleActiveSubscriptions.');
            }
            const localVarPath = `/circle-subscriptions/active`;
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

            if (circle !== undefined) {
                localVarQueryParameter['_circle'] = circle;
            }

            if (active !== undefined) {
                localVarQueryParameter['active'] = active;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCircleSubscriptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/circle-subscriptions`;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyCircleSubscriptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/circle-subscriptions/me`;
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
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserCircleSubscriptions: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getUserCircleSubscriptions.');
            }
            const localVarPath = `/circle-subscriptions/user/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
    }
};

/**
 * CircleSubscriptionsApi - functional programming interface
 * @export
 */
export const CircleSubscriptionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exportSubscriptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).exportSubscriptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} circle 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCircleSubscriptions(circle: string, active: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleSubscriptionResponseDto>>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).getAllCircleSubscriptions(circle, active, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllSubscribedUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleSubscription>>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).getAllSubscribedUsers(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllUserCircleSubscriptions(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleSubscription>>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).getAllUserCircleSubscriptions(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} circle 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleActiveSubscriptions(circle: string, active: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ActiveCircleSubscriptionsByTierDto>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).getCircleActiveSubscriptions(circle, active, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleSubscriptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleSubscription>>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).getCircleSubscriptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMyCircleSubscriptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleSubscription>>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).getMyCircleSubscriptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserCircleSubscriptions(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleSubscription>>>> {
            const localVarAxiosArgs = await CircleSubscriptionsApiAxiosParamCreator(configuration).getUserCircleSubscriptions(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CircleSubscriptionsApi - factory interface
 * @export
 */
export const CircleSubscriptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exportSubscriptions(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CircleSubscriptionsApiFp(configuration).exportSubscriptions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} circle 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCircleSubscriptions(circle: string, active: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleSubscriptionResponseDto>>> {
            return CircleSubscriptionsApiFp(configuration).getAllCircleSubscriptions(circle, active, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllSubscribedUsers(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleSubscription>>> {
            return CircleSubscriptionsApiFp(configuration).getAllSubscribedUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllUserCircleSubscriptions(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleSubscription>>> {
            return CircleSubscriptionsApiFp(configuration).getAllUserCircleSubscriptions(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} circle 
         * @param {boolean} active 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleActiveSubscriptions(circle: string, active: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<ActiveCircleSubscriptionsByTierDto>> {
            return CircleSubscriptionsApiFp(configuration).getCircleActiveSubscriptions(circle, active, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleSubscriptions(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleSubscription>>> {
            return CircleSubscriptionsApiFp(configuration).getCircleSubscriptions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMyCircleSubscriptions(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleSubscription>>> {
            return CircleSubscriptionsApiFp(configuration).getMyCircleSubscriptions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserCircleSubscriptions(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleSubscription>>> {
            return CircleSubscriptionsApiFp(configuration).getUserCircleSubscriptions(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CircleSubscriptionsApi - object-oriented interface
 * @export
 * @class CircleSubscriptionsApi
 * @extends {BaseAPI}
 */
export class CircleSubscriptionsApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async exportSubscriptions(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CircleSubscriptionsApiFp(this.configuration).exportSubscriptions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} circle 
     * @param {boolean} active 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async getAllCircleSubscriptions(circle: string, active: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleSubscriptionResponseDto>>> {
        return CircleSubscriptionsApiFp(this.configuration).getAllCircleSubscriptions(circle, active, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async getAllSubscribedUsers(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleSubscription>>> {
        return CircleSubscriptionsApiFp(this.configuration).getAllSubscribedUsers(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async getAllUserCircleSubscriptions(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleSubscription>>> {
        return CircleSubscriptionsApiFp(this.configuration).getAllUserCircleSubscriptions(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} circle 
     * @param {boolean} active 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async getCircleActiveSubscriptions(circle: string, active: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<ActiveCircleSubscriptionsByTierDto>> {
        return CircleSubscriptionsApiFp(this.configuration).getCircleActiveSubscriptions(circle, active, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async getCircleSubscriptions(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleSubscription>>> {
        return CircleSubscriptionsApiFp(this.configuration).getCircleSubscriptions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async getMyCircleSubscriptions(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleSubscription>>> {
        return CircleSubscriptionsApiFp(this.configuration).getMyCircleSubscriptions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleSubscriptionsApi
     */
    public async getUserCircleSubscriptions(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleSubscription>>> {
        return CircleSubscriptionsApiFp(this.configuration).getUserCircleSubscriptions(id, options).then((request) => request(this.axios, this.basePath));
    }
}
