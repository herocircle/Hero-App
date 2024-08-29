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
import { BannerDTO } from '../models';
import { BannerWithPicDTO } from '../models';
import { CircleHome } from '../models';
import { SecondBannerDTO } from '../models';
import { SubScribeBlockDTO } from '../models';
/**
 * CircleHomeLandingApi - axios parameter creator
 * @export
 */
export const CircleHomeLandingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} circleId 
         * @param {BannerDTO} firstBanner 
         * @param {SecondBannerDTO} secondBanner 
         * @param {BannerWithPicDTO} bannerWithPic 
         * @param {SubScribeBlockDTO} subScribeBlock 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createForm: async (circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'circleId' is not null or undefined
            if (circleId === null || circleId === undefined) {
                throw new RequiredError('circleId','Required parameter circleId was null or undefined when calling createForm.');
            }
            // verify required parameter 'firstBanner' is not null or undefined
            if (firstBanner === null || firstBanner === undefined) {
                throw new RequiredError('firstBanner','Required parameter firstBanner was null or undefined when calling createForm.');
            }
            // verify required parameter 'secondBanner' is not null or undefined
            if (secondBanner === null || secondBanner === undefined) {
                throw new RequiredError('secondBanner','Required parameter secondBanner was null or undefined when calling createForm.');
            }
            // verify required parameter 'bannerWithPic' is not null or undefined
            if (bannerWithPic === null || bannerWithPic === undefined) {
                throw new RequiredError('bannerWithPic','Required parameter bannerWithPic was null or undefined when calling createForm.');
            }
            // verify required parameter 'subScribeBlock' is not null or undefined
            if (subScribeBlock === null || subScribeBlock === undefined) {
                throw new RequiredError('subScribeBlock','Required parameter subScribeBlock was null or undefined when calling createForm.');
            }
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling createForm.');
            }
            const localVarPath = `/circle-home`;
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


            if (circleId !== undefined) { 
                localVarFormParams.append('circleId', circleId as any);
            }

            if (firstBanner !== undefined) { 
                localVarFormParams.append('firstBanner', firstBanner as any);
            }

            if (secondBanner !== undefined) { 
                localVarFormParams.append('secondBanner', secondBanner as any);
            }

            if (bannerWithPic !== undefined) { 
                localVarFormParams.append('BannerWithPic', bannerWithPic as any);
            }

            if (subScribeBlock !== undefined) { 
                localVarFormParams.append('subScribeBlock', subScribeBlock as any);
            }

            if (lang !== undefined) { 
                localVarFormParams.append('lang', lang as any);
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
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (lang: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling findAll.');
            }
            const localVarPath = `/circle-home`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
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
        findOneById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling findOneById.');
            }
            const localVarPath = `/circle-home/{id}`
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
         * @param {string} circleName 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCircleByName: async (circleName: string, lang: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'circleName' is not null or undefined
            if (circleName === null || circleName === undefined) {
                throw new RequiredError('circleName','Required parameter circleName was null or undefined when calling getCircleByName.');
            }
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling getCircleByName.');
            }
            const localVarPath = `/circle-home/name/{circleName}`
                .replace(`{${"circleName"}}`, encodeURIComponent(String(circleName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (lang !== undefined) {
                localVarQueryParameter['lang'] = lang;
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
        remove: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling remove.');
            }
            const localVarPath = `/circle-home/{id}`
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
         * @param {string} circleId 
         * @param {BannerDTO} firstBanner 
         * @param {SecondBannerDTO} secondBanner 
         * @param {BannerWithPicDTO} bannerWithPic 
         * @param {SubScribeBlockDTO} subScribeBlock 
         * @param {string} lang 
         * @param {string} id2 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateForm: async (circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, id2: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'circleId' is not null or undefined
            if (circleId === null || circleId === undefined) {
                throw new RequiredError('circleId','Required parameter circleId was null or undefined when calling updateForm.');
            }
            // verify required parameter 'firstBanner' is not null or undefined
            if (firstBanner === null || firstBanner === undefined) {
                throw new RequiredError('firstBanner','Required parameter firstBanner was null or undefined when calling updateForm.');
            }
            // verify required parameter 'secondBanner' is not null or undefined
            if (secondBanner === null || secondBanner === undefined) {
                throw new RequiredError('secondBanner','Required parameter secondBanner was null or undefined when calling updateForm.');
            }
            // verify required parameter 'bannerWithPic' is not null or undefined
            if (bannerWithPic === null || bannerWithPic === undefined) {
                throw new RequiredError('bannerWithPic','Required parameter bannerWithPic was null or undefined when calling updateForm.');
            }
            // verify required parameter 'subScribeBlock' is not null or undefined
            if (subScribeBlock === null || subScribeBlock === undefined) {
                throw new RequiredError('subScribeBlock','Required parameter subScribeBlock was null or undefined when calling updateForm.');
            }
            // verify required parameter 'lang' is not null or undefined
            if (lang === null || lang === undefined) {
                throw new RequiredError('lang','Required parameter lang was null or undefined when calling updateForm.');
            }
            // verify required parameter 'id2' is not null or undefined
            if (id2 === null || id2 === undefined) {
                throw new RequiredError('id2','Required parameter id2 was null or undefined when calling updateForm.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateForm.');
            }
            const localVarPath = `/circle-home/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (circleId !== undefined) { 
                localVarFormParams.append('circleId', circleId as any);
            }

            if (firstBanner !== undefined) { 
                localVarFormParams.append('firstBanner', firstBanner as any);
            }

            if (secondBanner !== undefined) { 
                localVarFormParams.append('secondBanner', secondBanner as any);
            }

            if (bannerWithPic !== undefined) { 
                localVarFormParams.append('BannerWithPic', bannerWithPic as any);
            }

            if (subScribeBlock !== undefined) { 
                localVarFormParams.append('subScribeBlock', subScribeBlock as any);
            }

            if (lang !== undefined) { 
                localVarFormParams.append('lang', lang as any);
            }

            if (id !== undefined) { 
                localVarFormParams.append('_id', id as any);
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
 * CircleHomeLandingApi - functional programming interface
 * @export
 */
export const CircleHomeLandingApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} circleId 
         * @param {BannerDTO} firstBanner 
         * @param {SecondBannerDTO} secondBanner 
         * @param {BannerWithPicDTO} bannerWithPic 
         * @param {SubScribeBlockDTO} subScribeBlock 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createForm(circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CircleHome>>> {
            const localVarAxiosArgs = await CircleHomeLandingApiAxiosParamCreator(configuration).createForm(circleId, firstBanner, secondBanner, bannerWithPic, subScribeBlock, lang, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(lang: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleHome>>>> {
            const localVarAxiosArgs = await CircleHomeLandingApiAxiosParamCreator(configuration).findAll(lang, options);
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
        async findOneById(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CircleHome>>> {
            const localVarAxiosArgs = await CircleHomeLandingApiAxiosParamCreator(configuration).findOneById(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} circleName 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleByName(circleName: string, lang: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CircleHome>>>> {
            const localVarAxiosArgs = await CircleHomeLandingApiAxiosParamCreator(configuration).getCircleByName(circleName, lang, options);
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
        async remove(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CircleHome>>> {
            const localVarAxiosArgs = await CircleHomeLandingApiAxiosParamCreator(configuration).remove(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} circleId 
         * @param {BannerDTO} firstBanner 
         * @param {SecondBannerDTO} secondBanner 
         * @param {BannerWithPicDTO} bannerWithPic 
         * @param {SubScribeBlockDTO} subScribeBlock 
         * @param {string} lang 
         * @param {string} id2 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateForm(circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, id2: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CircleHome>>> {
            const localVarAxiosArgs = await CircleHomeLandingApiAxiosParamCreator(configuration).updateForm(circleId, firstBanner, secondBanner, bannerWithPic, subScribeBlock, lang, id2, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CircleHomeLandingApi - factory interface
 * @export
 */
export const CircleHomeLandingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} circleId 
         * @param {BannerDTO} firstBanner 
         * @param {SecondBannerDTO} secondBanner 
         * @param {BannerWithPicDTO} bannerWithPic 
         * @param {SubScribeBlockDTO} subScribeBlock 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createForm(circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CircleHome>> {
            return CircleHomeLandingApiFp(configuration).createForm(circleId, firstBanner, secondBanner, bannerWithPic, subScribeBlock, lang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(lang: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleHome>>> {
            return CircleHomeLandingApiFp(configuration).findAll(lang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOneById(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CircleHome>> {
            return CircleHomeLandingApiFp(configuration).findOneById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} circleName 
         * @param {string} lang 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCircleByName(circleName: string, lang: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CircleHome>>> {
            return CircleHomeLandingApiFp(configuration).getCircleByName(circleName, lang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async remove(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CircleHome>> {
            return CircleHomeLandingApiFp(configuration).remove(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} circleId 
         * @param {BannerDTO} firstBanner 
         * @param {SecondBannerDTO} secondBanner 
         * @param {BannerWithPicDTO} bannerWithPic 
         * @param {SubScribeBlockDTO} subScribeBlock 
         * @param {string} lang 
         * @param {string} id2 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateForm(circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, id2: string, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CircleHome>> {
            return CircleHomeLandingApiFp(configuration).updateForm(circleId, firstBanner, secondBanner, bannerWithPic, subScribeBlock, lang, id2, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CircleHomeLandingApi - object-oriented interface
 * @export
 * @class CircleHomeLandingApi
 * @extends {BaseAPI}
 */
export class CircleHomeLandingApi extends BaseAPI {
    /**
     * 
     * @param {string} circleId 
     * @param {BannerDTO} firstBanner 
     * @param {SecondBannerDTO} secondBanner 
     * @param {BannerWithPicDTO} bannerWithPic 
     * @param {SubScribeBlockDTO} subScribeBlock 
     * @param {string} lang 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleHomeLandingApi
     */
    public async createForm(circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CircleHome>> {
        return CircleHomeLandingApiFp(this.configuration).createForm(circleId, firstBanner, secondBanner, bannerWithPic, subScribeBlock, lang, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} lang 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleHomeLandingApi
     */
    public async findAll(lang: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleHome>>> {
        return CircleHomeLandingApiFp(this.configuration).findAll(lang, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleHomeLandingApi
     */
    public async findOneById(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CircleHome>> {
        return CircleHomeLandingApiFp(this.configuration).findOneById(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} circleName 
     * @param {string} lang 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleHomeLandingApi
     */
    public async getCircleByName(circleName: string, lang: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CircleHome>>> {
        return CircleHomeLandingApiFp(this.configuration).getCircleByName(circleName, lang, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleHomeLandingApi
     */
    public async remove(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CircleHome>> {
        return CircleHomeLandingApiFp(this.configuration).remove(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} circleId 
     * @param {BannerDTO} firstBanner 
     * @param {SecondBannerDTO} secondBanner 
     * @param {BannerWithPicDTO} bannerWithPic 
     * @param {SubScribeBlockDTO} subScribeBlock 
     * @param {string} lang 
     * @param {string} id2 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CircleHomeLandingApi
     */
    public async updateForm(circleId: string, firstBanner: BannerDTO, secondBanner: SecondBannerDTO, bannerWithPic: BannerWithPicDTO, subScribeBlock: SubScribeBlockDTO, lang: string, id2: string, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CircleHome>> {
        return CircleHomeLandingApiFp(this.configuration).updateForm(circleId, firstBanner, secondBanner, bannerWithPic, subScribeBlock, lang, id2, id, options).then((request) => request(this.axios, this.basePath));
    }
}
