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

import { PublicUserProfile } from './public-user-profile';
 /**
 * 
 *
 * @export
 * @interface Study
 */
export interface Study {

    /**
     * @type {string}
     * @memberof Study
     */
    id: string;

    /**
     * @type {string}
     * @memberof Study
     */
    title: string;

    /**
     * @type {string}
     * @memberof Study
     */
    writer: string;

    /**
     * @type {string}
     * @memberof Study
     */
    date: string;

    /**
     * @type {string}
     * @memberof Study
     */
    cover: string;

    /**
     * @type {string}
     * @memberof Study
     */
    photo: string;

    /**
     * @type {string}
     * @memberof Study
     */
    description: string;

    /**
     * @type {string}
     * @memberof Study
     */
    subTitle: string;

    /**
     * @type {string}
     * @memberof Study
     */
    text1: string;

    /**
     * @type {string}
     * @memberof Study
     */
    text2: string;

    /**
     * @type {string}
     * @memberof Study
     */
    photoDescription: string;

    /**
     * @type {PublicUserProfile}
     * @memberof Study
     */
    populatedWriter: PublicUserProfile;
}