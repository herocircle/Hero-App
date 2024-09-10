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

import { PublicCircleProfileDTO } from './public-circle-profile-dto';
import { PublicUserProfile } from './public-user-profile';
 /**
 * 
 *
 * @export
 * @interface CircleEvent
 */
export interface CircleEvent {

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    id: string;

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    user: string;

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    circle: string;

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    description?: string;

    /**
     * @type {Date}
     * @memberof CircleEvent
     */
    date?: Date;

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    title?: string;

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    summary?: string;

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    link?: string;

    /**
     * @type {Array<string>}
     * @memberof CircleEvent
     */
    images: Array<string>;

    /**
     * @type {string}
     * @memberof CircleEvent
     */
    location?: string;

    /**
     * @type {boolean}
     * @memberof CircleEvent
     */
    isPublic?: boolean;

    /**
     * @type {PublicUserProfile}
     * @memberof CircleEvent
     */
    user: PublicUserProfile;

    /**
     * @type {PublicCircleProfileDTO}
     * @memberof CircleEvent
     */
    circle: PublicCircleProfileDTO;
}