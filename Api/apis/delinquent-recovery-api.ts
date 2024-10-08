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
 * DelinquentRecoveryApi - axios parameter creator
 * @export
 */
export const DelinquentRecoveryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} beginDate 
         * @param {string} endDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDelinquentAnalyticsCsv: async (beginDate: string, endDate: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'beginDate' is not null or undefined
            if (beginDate === null || beginDate === undefined) {
                throw new RequiredError('beginDate','Required parameter beginDate was null or undefined when calling getDelinquentAnalyticsCsv.');
            }
            // verify required parameter 'endDate' is not null or undefined
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling getDelinquentAnalyticsCsv.');
            }
            const localVarPath = `/delinquent-recovery-csv`;
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

            if (beginDate !== undefined) {
                localVarQueryParameter['beginDate'] = beginDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
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
        sweepDelinquentCustomers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sweep-delinquent-customers`;
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
 * DelinquentRecoveryApi - functional programming interface
 * @export
 */
export const DelinquentRecoveryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} beginDate 
         * @param {string} endDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDelinquentAnalyticsCsv(beginDate: string, endDate: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DelinquentRecoveryApiAxiosParamCreator(configuration).getDelinquentAnalyticsCsv(beginDate, endDate, options);
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
        async sweepDelinquentCustomers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DelinquentRecoveryApiAxiosParamCreator(configuration).sweepDelinquentCustomers(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DelinquentRecoveryApi - factory interface
 * @export
 */
export const DelinquentRecoveryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} beginDate 
         * @param {string} endDate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDelinquentAnalyticsCsv(beginDate: string, endDate: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DelinquentRecoveryApiFp(configuration).getDelinquentAnalyticsCsv(beginDate, endDate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sweepDelinquentCustomers(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DelinquentRecoveryApiFp(configuration).sweepDelinquentCustomers(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DelinquentRecoveryApi - object-oriented interface
 * @export
 * @class DelinquentRecoveryApi
 * @extends {BaseAPI}
 */
export class DelinquentRecoveryApi extends BaseAPI {
    /**
     * 
     * @param {string} beginDate 
     * @param {string} endDate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DelinquentRecoveryApi
     */
    public async getDelinquentAnalyticsCsv(beginDate: string, endDate: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DelinquentRecoveryApiFp(this.configuration).getDelinquentAnalyticsCsv(beginDate, endDate, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DelinquentRecoveryApi
     */
    public async sweepDelinquentCustomers(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DelinquentRecoveryApiFp(this.configuration).sweepDelinquentCustomers(options).then((request) => request(this.axios, this.basePath));
    }
}
