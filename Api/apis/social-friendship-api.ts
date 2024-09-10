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
import { Friendship } from '../models';
/**
 * SocialFriendshipApi - axios parameter creator
 * @export
 */
export const SocialFriendshipApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} userId2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCommonFriends: async (userId2: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId2' is not null or undefined
            if (userId2 === null || userId2 === undefined) {
                throw new RequiredError('userId2','Required parameter userId2 was null or undefined when calling getCommonFriends.');
            }
            const localVarPath = `/friendship/common-friends/{userId2}`
                .replace(`{${"userId2"}}`, encodeURIComponent(String(userId2)));
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
        getSuggestedFriends: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/friendship/suggested-friends`;
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
        getUserFriends: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/friendship/user-friends`;
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
        getUserPendingRequests: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/friendship/user-pending-requests`;
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
         * @param {string} requestee 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendFriendRequest: async (requestee: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestee' is not null or undefined
            if (requestee === null || requestee === undefined) {
                throw new RequiredError('requestee','Required parameter requestee was null or undefined when calling sendFriendRequest.');
            }
            const localVarPath = `/friendship/send-request/{requestee}`
                .replace(`{${"requestee"}}`, encodeURIComponent(String(requestee)));
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
         * @param {string} friendId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unfriendUser: async (friendId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'friendId' is not null or undefined
            if (friendId === null || friendId === undefined) {
                throw new RequiredError('friendId','Required parameter friendId was null or undefined when calling unfriendUser.');
            }
            const localVarPath = `/friendship/unfriend/{friendId}`
                .replace(`{${"friendId"}}`, encodeURIComponent(String(friendId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * @param {string} friendshipId 
         * @param {string} status 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFriendRequestStatus: async (friendshipId: string, status: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'friendshipId' is not null or undefined
            if (friendshipId === null || friendshipId === undefined) {
                throw new RequiredError('friendshipId','Required parameter friendshipId was null or undefined when calling updateFriendRequestStatus.');
            }
            // verify required parameter 'status' is not null or undefined
            if (status === null || status === undefined) {
                throw new RequiredError('status','Required parameter status was null or undefined when calling updateFriendRequestStatus.');
            }
            const localVarPath = `/friendship/update-status/{friendshipId}/{status}`
                .replace(`{${"friendshipId"}}`, encodeURIComponent(String(friendshipId)))
                .replace(`{${"status"}}`, encodeURIComponent(String(status)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
 * SocialFriendshipApi - functional programming interface
 * @export
 */
export const SocialFriendshipApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} userId2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCommonFriends(userId2: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Friendship>>>> {
            const localVarAxiosArgs = await SocialFriendshipApiAxiosParamCreator(configuration).getCommonFriends(userId2, options);
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
        async getSuggestedFriends(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Friendship>>>> {
            const localVarAxiosArgs = await SocialFriendshipApiAxiosParamCreator(configuration).getSuggestedFriends(options);
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
        async getUserFriends(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Friendship>>>> {
            const localVarAxiosArgs = await SocialFriendshipApiAxiosParamCreator(configuration).getUserFriends(options);
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
        async getUserPendingRequests(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Friendship>>>> {
            const localVarAxiosArgs = await SocialFriendshipApiAxiosParamCreator(configuration).getUserPendingRequests(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} requestee 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendFriendRequest(requestee: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Friendship>>> {
            const localVarAxiosArgs = await SocialFriendshipApiAxiosParamCreator(configuration).sendFriendRequest(requestee, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} friendId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unfriendUser(friendId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SocialFriendshipApiAxiosParamCreator(configuration).unfriendUser(friendId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} friendshipId 
         * @param {string} status 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFriendRequestStatus(friendshipId: string, status: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Friendship>>> {
            const localVarAxiosArgs = await SocialFriendshipApiAxiosParamCreator(configuration).updateFriendRequestStatus(friendshipId, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SocialFriendshipApi - factory interface
 * @export
 */
export const SocialFriendshipApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} userId2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCommonFriends(userId2: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Friendship>>> {
            return SocialFriendshipApiFp(configuration).getCommonFriends(userId2, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSuggestedFriends(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Friendship>>> {
            return SocialFriendshipApiFp(configuration).getSuggestedFriends(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserFriends(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Friendship>>> {
            return SocialFriendshipApiFp(configuration).getUserFriends(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserPendingRequests(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Friendship>>> {
            return SocialFriendshipApiFp(configuration).getUserPendingRequests(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} requestee 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendFriendRequest(requestee: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Friendship>> {
            return SocialFriendshipApiFp(configuration).sendFriendRequest(requestee, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} friendId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unfriendUser(friendId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SocialFriendshipApiFp(configuration).unfriendUser(friendId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} friendshipId 
         * @param {string} status 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFriendRequestStatus(friendshipId: string, status: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Friendship>> {
            return SocialFriendshipApiFp(configuration).updateFriendRequestStatus(friendshipId, status, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SocialFriendshipApi - object-oriented interface
 * @export
 * @class SocialFriendshipApi
 * @extends {BaseAPI}
 */
export class SocialFriendshipApi extends BaseAPI {
    /**
     * 
     * @param {string} userId2 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialFriendshipApi
     */
    public async getCommonFriends(userId2: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Friendship>>> {
        return SocialFriendshipApiFp(this.configuration).getCommonFriends(userId2, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialFriendshipApi
     */
    public async getSuggestedFriends(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Friendship>>> {
        return SocialFriendshipApiFp(this.configuration).getSuggestedFriends(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialFriendshipApi
     */
    public async getUserFriends(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Friendship>>> {
        return SocialFriendshipApiFp(this.configuration).getUserFriends(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialFriendshipApi
     */
    public async getUserPendingRequests(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Friendship>>> {
        return SocialFriendshipApiFp(this.configuration).getUserPendingRequests(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} requestee 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialFriendshipApi
     */
    public async sendFriendRequest(requestee: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Friendship>> {
        return SocialFriendshipApiFp(this.configuration).sendFriendRequest(requestee, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} friendId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialFriendshipApi
     */
    public async unfriendUser(friendId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SocialFriendshipApiFp(this.configuration).unfriendUser(friendId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} friendshipId 
     * @param {string} status 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialFriendshipApi
     */
    public async updateFriendRequestStatus(friendshipId: string, status: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Friendship>> {
        return SocialFriendshipApiFp(this.configuration).updateFriendRequestStatus(friendshipId, status, options).then((request) => request(this.axios, this.basePath));
    }
}