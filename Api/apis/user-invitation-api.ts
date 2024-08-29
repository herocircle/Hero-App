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
import { AcceptInvitationDto } from '../models';
import { CheckCodeRequestBody } from '../models';
import { InviteUserDto } from '../models';
import { User } from '../models';
/**
 * UserInvitationApi - axios parameter creator
 * @export
 */
export const UserInvitationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AcceptInvitationDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        acceptInvitation: async (body: AcceptInvitationDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling acceptInvitation.');
            }
            const localVarPath = `/user-invitation/accept-invitation`;
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
         * @param {CheckCodeRequestBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkInvitationCode: async (body: CheckCodeRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling checkInvitationCode.');
            }
            const localVarPath = `/user-invitation/check-invitation-code`;
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
         * @param {InviteUserDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inviteUser: async (body: InviteUserDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling inviteUser.');
            }
            const localVarPath = `/user-invitation/invite-user`;
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
 * UserInvitationApi - functional programming interface
 * @export
 */
export const UserInvitationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AcceptInvitationDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async acceptInvitation(body: AcceptInvitationDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await UserInvitationApiAxiosParamCreator(configuration).acceptInvitation(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CheckCodeRequestBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkInvitationCode(body: CheckCodeRequestBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await UserInvitationApiAxiosParamCreator(configuration).checkInvitationCode(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {InviteUserDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inviteUser(body: InviteUserDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<User>>> {
            const localVarAxiosArgs = await UserInvitationApiAxiosParamCreator(configuration).inviteUser(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserInvitationApi - factory interface
 * @export
 */
export const UserInvitationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {AcceptInvitationDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async acceptInvitation(body: AcceptInvitationDto, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return UserInvitationApiFp(configuration).acceptInvitation(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CheckCodeRequestBody} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkInvitationCode(body: CheckCodeRequestBody, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return UserInvitationApiFp(configuration).checkInvitationCode(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {InviteUserDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inviteUser(body: InviteUserDto, options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
            return UserInvitationApiFp(configuration).inviteUser(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserInvitationApi - object-oriented interface
 * @export
 * @class UserInvitationApi
 * @extends {BaseAPI}
 */
export class UserInvitationApi extends BaseAPI {
    /**
     * 
     * @param {AcceptInvitationDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserInvitationApi
     */
    public async acceptInvitation(body: AcceptInvitationDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return UserInvitationApiFp(this.configuration).acceptInvitation(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CheckCodeRequestBody} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserInvitationApi
     */
    public async checkInvitationCode(body: CheckCodeRequestBody, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return UserInvitationApiFp(this.configuration).checkInvitationCode(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {InviteUserDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserInvitationApi
     */
    public async inviteUser(body: InviteUserDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<User>> {
        return UserInvitationApiFp(this.configuration).inviteUser(body, options).then((request) => request(this.axios, this.basePath));
    }
}
