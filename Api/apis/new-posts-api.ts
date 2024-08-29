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
import { NewPost } from '../models';
/**
 * NewPostsApi - axios parameter creator
 * @export
 */
export const NewPostsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling _delete.');
            }
            const localVarPath = `/new-posts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createForm: async (description: string, url: string, image: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'description' is not null or undefined
            if (description === null || description === undefined) {
                throw new RequiredError('description','Required parameter description was null or undefined when calling createForm.');
            }
            // verify required parameter 'url' is not null or undefined
            if (url === null || url === undefined) {
                throw new RequiredError('url','Required parameter url was null or undefined when calling createForm.');
            }
            // verify required parameter 'image' is not null or undefined
            if (image === null || image === undefined) {
                throw new RequiredError('image','Required parameter image was null or undefined when calling createForm.');
            }
            const localVarPath = `/new-posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


            if (description !== undefined) { 
                localVarFormParams.append('description', description as any);
            }

            if (url !== undefined) { 
                localVarFormParams.append('url', url as any);
            }

            if (image !== undefined) { 
                localVarFormParams.append('image', image as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} keyword Additional keyword for search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (keyword: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyword' is not null or undefined
            if (keyword === null || keyword === undefined) {
                throw new RequiredError('keyword','Required parameter keyword was null or undefined when calling findAll.');
            }
            const localVarPath = `/new-posts`
                .replace(`{${"keyword"}}`, encodeURIComponent(String(keyword)));
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
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling findOne.');
            }
            const localVarPath = `/new-posts/{id}`
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
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateForm: async (description: string, url: string, image: Blob, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'description' is not null or undefined
            if (description === null || description === undefined) {
                throw new RequiredError('description','Required parameter description was null or undefined when calling updateForm.');
            }
            // verify required parameter 'url' is not null or undefined
            if (url === null || url === undefined) {
                throw new RequiredError('url','Required parameter url was null or undefined when calling updateForm.');
            }
            // verify required parameter 'image' is not null or undefined
            if (image === null || image === undefined) {
                throw new RequiredError('image','Required parameter image was null or undefined when calling updateForm.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateForm.');
            }
            const localVarPath = `/new-posts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (description !== undefined) { 
                localVarFormParams.append('description', description as any);
            }

            if (url !== undefined) { 
                localVarFormParams.append('url', url as any);
            }

            if (image !== undefined) { 
                localVarFormParams.append('image', image as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NewPostsApi - functional programming interface
 * @export
 */
export const NewPostsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await NewPostsApiAxiosParamCreator(configuration)._delete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createForm(description: string, url: string, image: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<NewPost>>> {
            const localVarAxiosArgs = await NewPostsApiAxiosParamCreator(configuration).createForm(description, url, image, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} keyword Additional keyword for search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(keyword: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<NewPost>>>> {
            const localVarAxiosArgs = await NewPostsApiAxiosParamCreator(configuration).findAll(keyword, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<NewPost>>> {
            const localVarAxiosArgs = await NewPostsApiAxiosParamCreator(configuration).findOne(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateForm(description: string, url: string, image: Blob, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<NewPost>>> {
            const localVarAxiosArgs = await NewPostsApiAxiosParamCreator(configuration).updateForm(description, url, image, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NewPostsApi - factory interface
 * @export
 */
export const NewPostsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return NewPostsApiFp(configuration)._delete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createForm(description: string, url: string, image: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<NewPost>> {
            return NewPostsApiFp(configuration).createForm(description, url, image, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} keyword Additional keyword for search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(keyword: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<NewPost>>> {
            return NewPostsApiFp(configuration).findAll(keyword, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<NewPost>> {
            return NewPostsApiFp(configuration).findOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} id The ID of the new post
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateForm(description: string, url: string, image: Blob, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<NewPost>> {
            return NewPostsApiFp(configuration).updateForm(description, url, image, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NewPostsApi - object-oriented interface
 * @export
 * @class NewPostsApi
 * @extends {BaseAPI}
 */
export class NewPostsApi extends BaseAPI {
    /**
     * 
     * @param {string} id The ID of the new post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewPostsApi
     */
    public async _delete(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return NewPostsApiFp(this.configuration)._delete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} description 
     * @param {string} url 
     * @param {Blob} image 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewPostsApi
     */
    public async createForm(description: string, url: string, image: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<NewPost>> {
        return NewPostsApiFp(this.configuration).createForm(description, url, image, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} keyword Additional keyword for search
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewPostsApi
     */
    public async findAll(keyword: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<NewPost>>> {
        return NewPostsApiFp(this.configuration).findAll(keyword, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id The ID of the new post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewPostsApi
     */
    public async findOne(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<NewPost>> {
        return NewPostsApiFp(this.configuration).findOne(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} description 
     * @param {string} url 
     * @param {Blob} image 
     * @param {string} id The ID of the new post
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NewPostsApi
     */
    public async updateForm(description: string, url: string, image: Blob, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<NewPost>> {
        return NewPostsApiFp(this.configuration).updateForm(description, url, image, id, options).then((request) => request(this.axios, this.basePath));
    }
}
