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

import { ObjectId } from './object-id';
 /**
 * 
 *
 * @export
 * @interface Campaign
 */
export interface Campaign {

    /**
     * @type {string}
     * @memberof Campaign
     */
    id: string;

    /**
     * @type {ObjectId}
     * @memberof Campaign
     */
    newsletter: ObjectId;

    /**
     * @type {string}
     * @memberof Campaign
     */
    name: string;

    /**
     * @type {Array<string>}
     * @memberof Campaign
     */
    emailLists: Array<string>;

    /**
     * @type {Date}
     * @memberof Campaign
     */
    sentAt: Date;

    /**
     * @type {Date}
     * @memberof Campaign
     */
    scheduledAt: Date;

    /**
     * @type {any}
     * @memberof Campaign
     */
    metrics: any;

    /**
     * @type {boolean}
     * @memberof Campaign
     */
    triggered: boolean;
}
