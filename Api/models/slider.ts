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

import { Entry } from './entry';
 /**
 * 
 *
 * @export
 * @interface Slider
 */
export interface Slider {

    /**
     * @type {string}
     * @memberof Slider
     */
    id: string;

    /**
     * @type {string}
     * @memberof Slider
     */
    name: string;

    /**
     * @type {string}
     * @memberof Slider
     */
    displayLocation: string;

    /**
     * @type {Array<Entry>}
     * @memberof Slider
     */
    entries: Array<Entry>;
}
