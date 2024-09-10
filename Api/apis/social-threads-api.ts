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
import { AddCommentDto } from '../models';
import { CreateThreadDto } from '../models';
import { Thread } from '../models';
/**
 * SocialThreadsApi - axios parameter creator
 * @export
 */
export const SocialThreadsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddCommentDto} body 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addComment: async (body: AddCommentDto, threadId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addComment.');
            }
            // verify required parameter 'threadId' is not null or undefined
            if (threadId === null || threadId === undefined) {
                throw new RequiredError('threadId','Required parameter threadId was null or undefined when calling addComment.');
            }
            const localVarPath = `/threads/{threadId}/comments`
                .replace(`{${"threadId"}}`, encodeURIComponent(String(threadId)));
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
         * @summary Create a new thread.
         * @param {CreateThreadDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createThread: async (body: CreateThreadDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createThread.');
            }
            const localVarPath = `/threads`;
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
         * @param {string} threadId 
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteComment: async (threadId: string, commentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            if (threadId === null || threadId === undefined) {
                throw new RequiredError('threadId','Required parameter threadId was null or undefined when calling deleteComment.');
            }
            // verify required parameter 'commentId' is not null or undefined
            if (commentId === null || commentId === undefined) {
                throw new RequiredError('commentId','Required parameter commentId was null or undefined when calling deleteComment.');
            }
            const localVarPath = `/threads/{threadId}/comments/{commentId}`
                .replace(`{${"threadId"}}`, encodeURIComponent(String(threadId)))
                .replace(`{${"commentId"}}`, encodeURIComponent(String(commentId)));
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
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteThread: async (threadId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            if (threadId === null || threadId === undefined) {
                throw new RequiredError('threadId','Required parameter threadId was null or undefined when calling deleteThread.');
            }
            const localVarPath = `/threads/{threadId}`
                .replace(`{${"threadId"}}`, encodeURIComponent(String(threadId)));
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
         * @param {string} [circleId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getThreadsForUser: async (circleId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/threads`;
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

            if (circleId !== undefined) {
                localVarQueryParameter['circleId'] = circleId;
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
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setArchivedState: async (threadId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            if (threadId === null || threadId === undefined) {
                throw new RequiredError('threadId','Required parameter threadId was null or undefined when calling setArchivedState.');
            }
            const localVarPath = `/threads/{threadId}/archived`
                .replace(`{${"threadId"}}`, encodeURIComponent(String(threadId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setSeenState: async (threadId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'threadId' is not null or undefined
            if (threadId === null || threadId === undefined) {
                throw new RequiredError('threadId','Required parameter threadId was null or undefined when calling setSeenState.');
            }
            const localVarPath = `/threads/{threadId}/seen`
                .replace(`{${"threadId"}}`, encodeURIComponent(String(threadId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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
 * SocialThreadsApi - functional programming interface
 * @export
 */
export const SocialThreadsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddCommentDto} body 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addComment(body: AddCommentDto, threadId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Thread>>> {
            const localVarAxiosArgs = await SocialThreadsApiAxiosParamCreator(configuration).addComment(body, threadId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create a new thread.
         * @param {CreateThreadDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createThread(body: CreateThreadDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Thread>>> {
            const localVarAxiosArgs = await SocialThreadsApiAxiosParamCreator(configuration).createThread(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} threadId 
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteComment(threadId: string, commentId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Thread>>> {
            const localVarAxiosArgs = await SocialThreadsApiAxiosParamCreator(configuration).deleteComment(threadId, commentId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteThread(threadId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Thread>>> {
            const localVarAxiosArgs = await SocialThreadsApiAxiosParamCreator(configuration).deleteThread(threadId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [circleId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getThreadsForUser(circleId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Thread>>>> {
            const localVarAxiosArgs = await SocialThreadsApiAxiosParamCreator(configuration).getThreadsForUser(circleId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setArchivedState(threadId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Thread>>> {
            const localVarAxiosArgs = await SocialThreadsApiAxiosParamCreator(configuration).setArchivedState(threadId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setSeenState(threadId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Thread>>> {
            const localVarAxiosArgs = await SocialThreadsApiAxiosParamCreator(configuration).setSeenState(threadId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SocialThreadsApi - factory interface
 * @export
 */
export const SocialThreadsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {AddCommentDto} body 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addComment(body: AddCommentDto, threadId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Thread>> {
            return SocialThreadsApiFp(configuration).addComment(body, threadId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new thread.
         * @param {CreateThreadDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createThread(body: CreateThreadDto, options?: AxiosRequestConfig): Promise<AxiosResponse<Thread>> {
            return SocialThreadsApiFp(configuration).createThread(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} threadId 
         * @param {string} commentId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteComment(threadId: string, commentId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Thread>> {
            return SocialThreadsApiFp(configuration).deleteComment(threadId, commentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteThread(threadId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Thread>> {
            return SocialThreadsApiFp(configuration).deleteThread(threadId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [circleId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getThreadsForUser(circleId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Thread>>> {
            return SocialThreadsApiFp(configuration).getThreadsForUser(circleId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setArchivedState(threadId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Thread>> {
            return SocialThreadsApiFp(configuration).setArchivedState(threadId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} threadId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setSeenState(threadId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Thread>> {
            return SocialThreadsApiFp(configuration).setSeenState(threadId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SocialThreadsApi - object-oriented interface
 * @export
 * @class SocialThreadsApi
 * @extends {BaseAPI}
 */
export class SocialThreadsApi extends BaseAPI {
    /**
     * 
     * @param {AddCommentDto} body 
     * @param {string} threadId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialThreadsApi
     */
    public async addComment(body: AddCommentDto, threadId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Thread>> {
        return SocialThreadsApiFp(this.configuration).addComment(body, threadId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create a new thread.
     * @param {CreateThreadDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialThreadsApi
     */
    public async createThread(body: CreateThreadDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<Thread>> {
        return SocialThreadsApiFp(this.configuration).createThread(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} threadId 
     * @param {string} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialThreadsApi
     */
    public async deleteComment(threadId: string, commentId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Thread>> {
        return SocialThreadsApiFp(this.configuration).deleteComment(threadId, commentId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} threadId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialThreadsApi
     */
    public async deleteThread(threadId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Thread>> {
        return SocialThreadsApiFp(this.configuration).deleteThread(threadId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [circleId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialThreadsApi
     */
    public async getThreadsForUser(circleId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Thread>>> {
        return SocialThreadsApiFp(this.configuration).getThreadsForUser(circleId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} threadId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialThreadsApi
     */
    public async setArchivedState(threadId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Thread>> {
        return SocialThreadsApiFp(this.configuration).setArchivedState(threadId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} threadId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialThreadsApi
     */
    public async setSeenState(threadId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Thread>> {
        return SocialThreadsApiFp(this.configuration).setSeenState(threadId, options).then((request) => request(this.axios, this.basePath));
    }
}