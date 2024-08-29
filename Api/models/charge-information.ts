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
 * @interface ChargeInformation
 */
export interface ChargeInformation {

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    firstname: string;

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    lastname: string;

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    chargeId: string;

    /**
     * @type {Date}
     * @memberof ChargeInformation
     */
    chargeCreatedAt: Date;

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    invoiceId: string;

    /**
     * @type {Date}
     * @memberof ChargeInformation
     */
    invoiceCreatedAt: Date;

    /**
     * @type {number}
     * @memberof ChargeInformation
     */
    amount: number;

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    circleId: string;

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    circleName: string;

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    email: string;

    /**
     * @type {string}
     * @memberof ChargeInformation
     */
    period: string;
}
