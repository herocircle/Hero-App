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
/**
 * CloudFlareApi - axios parameter creator
 * @export
 */
export const CloudFlareApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAggregatedRequestStats: async (interval: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'interval' is not null or undefined
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling getAggregatedRequestStats.');
            }
            const localVarPath = `/analytics/cloudflare/aggregated-views-and-requests`;
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

            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRequestStats: async (interval: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'interval' is not null or undefined
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling getRequestStats.');
            }
            const localVarPath = `/analytics/cloudflare/daily-views-and-requests`;
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

            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSyntheticReport: async (interval: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'interval' is not null or undefined
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling getSyntheticReport.');
            }
            const localVarPath = `/analytics/cloudflare/synthetic-report`;
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

            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopVisitorsByCountry: async (interval: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'interval' is not null or undefined
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling getTopVisitorsByCountry.');
            }
            const localVarPath = `/analytics/cloudflare/top-visitors-by-country`;
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

            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUniqueVisitorsPerDay: async (interval: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'interval' is not null or undefined
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling getUniqueVisitorsPerDay.');
            }
            const localVarPath = `/analytics/cloudflare/unique-visitors-per-day`;
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

            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserHeatmapData: async (interval: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'interval' is not null or undefined
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling getUserHeatmapData.');
            }
            const localVarPath = `/analytics/cloudflare/user-heatmap-data`;
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

            if (interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
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
        graphql: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/analytics/cloudflare/graphql`;
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
    }
};

/**
 * CloudFlareApi - functional programming interface
 * @export
 */
export const CloudFlareApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAggregatedRequestStats(interval: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CloudFlareApiAxiosParamCreator(configuration).getAggregatedRequestStats(interval, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRequestStats(interval: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CloudFlareApiAxiosParamCreator(configuration).getRequestStats(interval, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSyntheticReport(interval: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CloudFlareApiAxiosParamCreator(configuration).getSyntheticReport(interval, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopVisitorsByCountry(interval: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CloudFlareApiAxiosParamCreator(configuration).getTopVisitorsByCountry(interval, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUniqueVisitorsPerDay(interval: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CloudFlareApiAxiosParamCreator(configuration).getUniqueVisitorsPerDay(interval, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserHeatmapData(interval: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CloudFlareApiAxiosParamCreator(configuration).getUserHeatmapData(interval, options);
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
        async graphql(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await CloudFlareApiAxiosParamCreator(configuration).graphql(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CloudFlareApi - factory interface
 * @export
 */
export const CloudFlareApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAggregatedRequestStats(interval: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CloudFlareApiFp(configuration).getAggregatedRequestStats(interval, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRequestStats(interval: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CloudFlareApiFp(configuration).getRequestStats(interval, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSyntheticReport(interval: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CloudFlareApiFp(configuration).getSyntheticReport(interval, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopVisitorsByCountry(interval: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CloudFlareApiFp(configuration).getTopVisitorsByCountry(interval, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUniqueVisitorsPerDay(interval: string, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CloudFlareApiFp(configuration).getUniqueVisitorsPerDay(interval, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} interval 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserHeatmapData(interval: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CloudFlareApiFp(configuration).getUserHeatmapData(interval, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async graphql(options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return CloudFlareApiFp(configuration).graphql(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CloudFlareApi - object-oriented interface
 * @export
 * @class CloudFlareApi
 * @extends {BaseAPI}
 */
export class CloudFlareApi extends BaseAPI {
    /**
     * 
     * @param {string} interval 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFlareApi
     */
    public async getAggregatedRequestStats(interval: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CloudFlareApiFp(this.configuration).getAggregatedRequestStats(interval, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} interval 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFlareApi
     */
    public async getRequestStats(interval: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CloudFlareApiFp(this.configuration).getRequestStats(interval, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} interval 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFlareApi
     */
    public async getSyntheticReport(interval: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CloudFlareApiFp(this.configuration).getSyntheticReport(interval, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} interval 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFlareApi
     */
    public async getTopVisitorsByCountry(interval: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CloudFlareApiFp(this.configuration).getTopVisitorsByCountry(interval, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} interval 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFlareApi
     */
    public async getUniqueVisitorsPerDay(interval: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CloudFlareApiFp(this.configuration).getUniqueVisitorsPerDay(interval, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} interval 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFlareApi
     */
    public async getUserHeatmapData(interval: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CloudFlareApiFp(this.configuration).getUserHeatmapData(interval, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudFlareApi
     */
    public async graphql(options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return CloudFlareApiFp(this.configuration).graphql(options).then((request) => request(this.axios, this.basePath));
    }
}