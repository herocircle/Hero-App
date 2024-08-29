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
 * @interface UserExportFiltersDTO
 */
export interface UserExportFiltersDTO {

    /**
     * @type {string}
     * @memberof UserExportFiltersDTO
     */
    filterType: UserExportFiltersDTOFilterTypeEnum;

    /**
     * @type {Array<string>}
     * @memberof UserExportFiltersDTO
     */
    userFields: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof UserExportFiltersDTO
     */
    subscriptionFields: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum UserExportFiltersDTOFilterTypeEnum {
    SupporterActive = 'supporter_active',
    Mobilizer = 'mobilizer',
    SupporterInactive = 'supporter_inactive',
    All = 'all'
}

