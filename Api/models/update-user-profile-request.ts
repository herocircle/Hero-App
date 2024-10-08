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

import { UpdateUserProfileRequestBio } from './update-user-profile-request-bio';
import { UpdateUserProfileRequestClimateWins } from './update-user-profile-request-climate-wins';
 /**
 * 
 *
 * @export
 * @interface UpdateUserProfileRequest
 */
export interface UpdateUserProfileRequest {

    /**
     * Username
     *
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    username?: string;

    /**
     * First name
     *
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    firstname?: string;

    /**
     * Last name
     *
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    lastname?: string;

    /**
     * Do you want to make your account private?
     *
     * @type {boolean}
     * @memberof UpdateUserProfileRequest
     */
    privateAccount?: boolean;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    youtube?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    facebook?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    linkedin?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    instagram?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    tiktok?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    twitter?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    website?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    country?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    city?: string;

    /**
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    description?: string;

    /**
     * @type {Array<string>}
     * @memberof UpdateUserProfileRequest
     */
    skills?: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof UpdateUserProfileRequest
     */
    cares?: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof UpdateUserProfileRequest
     */
    tags?: Array<string>;

    /**
     * @type {boolean}
     * @memberof UpdateUserProfileRequest
     */
    status?: boolean;

    /**
     * @type {boolean}
     * @memberof UpdateUserProfileRequest
     */
    updates?: boolean;

    /**
     * @type {boolean}
     * @memberof UpdateUserProfileRequest
     */
    acceptsCookies?: boolean;

    /**
     * @type {UpdateUserProfileRequestBio}
     * @memberof UpdateUserProfileRequest
     */
    bio?: UpdateUserProfileRequestBio;

    /**
     * @type {UpdateUserProfileRequestClimateWins}
     * @memberof UpdateUserProfileRequest
     */
    climateWins?: UpdateUserProfileRequestClimateWins;

    /**
     * New password
     *
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    password?: string;

    /**
     * Provide a valid password
     *
     * @type {string}
     * @memberof UpdateUserProfileRequest
     */
    oldPassword?: string;
}
