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
 * @interface CreateAmbassadorDto
 */
export interface CreateAmbassadorDto {

    /**
     * @type {Blob}
     * @memberof CreateAmbassadorDto
     */
    image: Blob;

    /**
     * @type {string}
     * @memberof CreateAmbassadorDto
     */
    firstName: string;

    /**
     * @type {string}
     * @memberof CreateAmbassadorDto
     */
    lastName: string;

    /**
     * @type {string}
     * @memberof CreateAmbassadorDto
     */
    country: string;

    /**
     * @type {string}
     * @memberof CreateAmbassadorDto
     */
    description: string;

    /**
     * @type {string}
     * @memberof CreateAmbassadorDto
     */
    category: string;

    /**
     * @type {string}
     * @memberof CreateAmbassadorDto
     */
    id: string;
}
