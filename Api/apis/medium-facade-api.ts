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
import { MediumFacade } from '../models';
/**
 * MediumFacadeApi - axios parameter creator
 * @export
 */
export const MediumFacadeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling _delete.');
            }
            const localVarPath = `/medium-facade/{id}`
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
         * @param {string} title 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} displayLocation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createForm: async (title: string, description: string, url: string, image: Blob, displayLocation: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'title' is not null or undefined
            if (title === null || title === undefined) {
                throw new RequiredError('title','Required parameter title was null or undefined when calling createForm.');
            }
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
            // verify required parameter 'displayLocation' is not null or undefined
            if (displayLocation === null || displayLocation === undefined) {
                throw new RequiredError('displayLocation','Required parameter displayLocation was null or undefined when calling createForm.');
            }
            const localVarPath = `/medium-facade`;
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


            if (title !== undefined) { 
                localVarFormParams.append('title', title as any);
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

            if (displayLocation !== undefined) { 
                localVarFormParams.append('displayLocation', displayLocation as any);
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
         * @param {string} [keyword] Additional keyword for search
         * @param {number} [limit] Number of items per page
         * @param {number} [page] Current page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (keyword?: string, limit?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/medium-facade`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
         * @param {string} location 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findByLocation: async (location: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'location' is not null or undefined
            if (location === null || location === undefined) {
                throw new RequiredError('location','Required parameter location was null or undefined when calling findByLocation.');
            }
            const localVarPath = `/medium-facade/by-location/{location}`
                .replace(`{${"location"}}`, encodeURIComponent(String(location)));
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
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling findOne.');
            }
            const localVarPath = `/medium-facade/{id}`
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDisplayLocations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/medium-facade/display-locations`;
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
         * @param {string} title 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} displayLocation 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateForm: async (title: string, description: string, url: string, image: Blob, displayLocation: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'title' is not null or undefined
            if (title === null || title === undefined) {
                throw new RequiredError('title','Required parameter title was null or undefined when calling updateForm.');
            }
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
            // verify required parameter 'displayLocation' is not null or undefined
            if (displayLocation === null || displayLocation === undefined) {
                throw new RequiredError('displayLocation','Required parameter displayLocation was null or undefined when calling updateForm.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateForm.');
            }
            const localVarPath = `/medium-facade/{id}`
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

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


            if (title !== undefined) { 
                localVarFormParams.append('title', title as any);
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

            if (displayLocation !== undefined) { 
                localVarFormParams.append('displayLocation', displayLocation as any);
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
 * MediumFacadeApi - functional programming interface
 * @export
 */
export const MediumFacadeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await MediumFacadeApiAxiosParamCreator(configuration)._delete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} title 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} displayLocation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createForm(title: string, description: string, url: string, image: Blob, displayLocation: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MediumFacade>>> {
            const localVarAxiosArgs = await MediumFacadeApiAxiosParamCreator(configuration).createForm(title, description, url, image, displayLocation, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [keyword] Additional keyword for search
         * @param {number} [limit] Number of items per page
         * @param {number} [page] Current page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(keyword?: string, limit?: number, page?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await MediumFacadeApiAxiosParamCreator(configuration).findAll(keyword, limit, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} location 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findByLocation(location: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<MediumFacade>>>> {
            const localVarAxiosArgs = await MediumFacadeApiAxiosParamCreator(configuration).findByLocation(location, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MediumFacade>>> {
            const localVarAxiosArgs = await MediumFacadeApiAxiosParamCreator(configuration).findOne(id, options);
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
        async listDisplayLocations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MediumFacadeApiAxiosParamCreator(configuration).listDisplayLocations(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} title 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} displayLocation 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateForm(title: string, description: string, url: string, image: Blob, displayLocation: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MediumFacade>>> {
            const localVarAxiosArgs = await MediumFacadeApiAxiosParamCreator(configuration).updateForm(title, description, url, image, displayLocation, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MediumFacadeApi - factory interface
 * @export
 */
export const MediumFacadeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return MediumFacadeApiFp(configuration)._delete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} title 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} displayLocation 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createForm(title: string, description: string, url: string, image: Blob, displayLocation: string, options?: AxiosRequestConfig): Promise<AxiosResponse<MediumFacade>> {
            return MediumFacadeApiFp(configuration).createForm(title, description, url, image, displayLocation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [keyword] Additional keyword for search
         * @param {number} [limit] Number of items per page
         * @param {number} [page] Current page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(keyword?: string, limit?: number, page?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return MediumFacadeApiFp(configuration).findAll(keyword, limit, page, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} location 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findByLocation(location: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<MediumFacade>>> {
            return MediumFacadeApiFp(configuration).findByLocation(location, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<MediumFacade>> {
            return MediumFacadeApiFp(configuration).findOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDisplayLocations(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MediumFacadeApiFp(configuration).listDisplayLocations(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} title 
         * @param {string} description 
         * @param {string} url 
         * @param {Blob} image 
         * @param {string} displayLocation 
         * @param {string} id The MediumFacade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateForm(title: string, description: string, url: string, image: Blob, displayLocation: string, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<MediumFacade>> {
            return MediumFacadeApiFp(configuration).updateForm(title, description, url, image, displayLocation, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MediumFacadeApi - object-oriented interface
 * @export
 * @class MediumFacadeApi
 * @extends {BaseAPI}
 */
export class MediumFacadeApi extends BaseAPI {
    /**
     * 
     * @param {string} id The MediumFacade ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediumFacadeApi
     */
    public async _delete(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return MediumFacadeApiFp(this.configuration)._delete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} title 
     * @param {string} description 
     * @param {string} url 
     * @param {Blob} image 
     * @param {string} displayLocation 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediumFacadeApi
     */
    public async createForm(title: string, description: string, url: string, image: Blob, displayLocation: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<MediumFacade>> {
        return MediumFacadeApiFp(this.configuration).createForm(title, description, url, image, displayLocation, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [keyword] Additional keyword for search
     * @param {number} [limit] Number of items per page
     * @param {number} [page] Current page number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediumFacadeApi
     */
    public async findAll(keyword?: string, limit?: number, page?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return MediumFacadeApiFp(this.configuration).findAll(keyword, limit, page, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} location 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediumFacadeApi
     */
    public async findByLocation(location: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<MediumFacade>>> {
        return MediumFacadeApiFp(this.configuration).findByLocation(location, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id The MediumFacade ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediumFacadeApi
     */
    public async findOne(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<MediumFacade>> {
        return MediumFacadeApiFp(this.configuration).findOne(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediumFacadeApi
     */
    public async listDisplayLocations(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MediumFacadeApiFp(this.configuration).listDisplayLocations(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} title 
     * @param {string} description 
     * @param {string} url 
     * @param {Blob} image 
     * @param {string} displayLocation 
     * @param {string} id The MediumFacade ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediumFacadeApi
     */
    public async updateForm(title: string, description: string, url: string, image: Blob, displayLocation: string, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<MediumFacade>> {
        return MediumFacadeApiFp(this.configuration).updateForm(title, description, url, image, displayLocation, id, options).then((request) => request(this.axios, this.basePath));
    }
}
