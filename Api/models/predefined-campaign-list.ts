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
 * @interface PredefinedCampaignList
 */
export interface PredefinedCampaignList {

    /**
     * @type {Array<string>}
     * @memberof PredefinedCampaignList
     */
    users: Array<string>;

    /**
     * @type {string}
     * @memberof PredefinedCampaignList
     */
    status: PredefinedCampaignListStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum PredefinedCampaignListStatusEnum {
    PREORDERED = 'PREORDERED',
    PAID = 'PAID',
    LATE = 'LATE',
    CANCELED = 'CANCELED'
}

