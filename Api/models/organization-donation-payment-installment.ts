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
 * @interface OrganizationDonationPaymentInstallment
 */
export interface OrganizationDonationPaymentInstallment {

    /**
     * @type {string}
     * @memberof OrganizationDonationPaymentInstallment
     */
    donationId: string;

    /**
     * @type {string}
     * @memberof OrganizationDonationPaymentInstallment
     */
    givingOrganization: string;

    /**
     * @type {string}
     * @memberof OrganizationDonationPaymentInstallment
     */
    circleId: string;

    /**
     * @type {string}
     * @memberof OrganizationDonationPaymentInstallment
     */
    circleName: string;

    /**
     * @type {number}
     * @memberof OrganizationDonationPaymentInstallment
     */
    circleMobilizers: number;

    /**
     * @type {number}
     * @memberof OrganizationDonationPaymentInstallment
     */
    totalMonthlyAmount: number;

    /**
     * @type {number}
     * @memberof OrganizationDonationPaymentInstallment
     */
    circleMonthlyShare: number;
}