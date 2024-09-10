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
 * @interface UserReferralSummary
 */
export interface UserReferralSummary {

    /**
     * @type {any}
     * @memberof UserReferralSummary
     */
    id: any;

    /**
     * @type {string}
     * @memberof UserReferralSummary
     */
    email: string;

    /**
     * @type {string}
     * @memberof UserReferralSummary
     */
    firstname: string;

    /**
     * @type {string}
     * @memberof UserReferralSummary
     */
    lastname: string;

    /**
     * @type {number}
     * @memberof UserReferralSummary
     */
    referredSignups: number;

    /**
     * @type {number}
     * @memberof UserReferralSummary
     */
    referredSubscriptions: number;

    /**
     * @type {number}
     * @memberof UserReferralSummary
     */
    totalReferrals: number;

    /**
     * @type {string}
     * @memberof UserReferralSummary
     */
    referralLink?: string;
}