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

 /**
 * 
 *
 * @export
 * @interface NewSubscriptionListEntry
 */
export interface NewSubscriptionListEntry {

    /**
     * @type {string}
     * @memberof NewSubscriptionListEntry
     */
    name: string;

    /**
     * @type {string}
     * @memberof NewSubscriptionListEntry
     */
    email: string;

    /**
     * @type {number}
     * @memberof NewSubscriptionListEntry
     */
    amount: number;

    /**
     * @type {string}
     * @memberof NewSubscriptionListEntry
     */
    circleName: string;

    /**
     * @type {Date}
     * @memberof NewSubscriptionListEntry
     */
    date: Date;
}
