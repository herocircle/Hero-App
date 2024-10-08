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

import { Circle } from './circle';
import { User } from './user';
 /**
 * 
 *
 * @export
 * @interface CircleSubscription
 */
export interface CircleSubscription {

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    id: string;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    user: string;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    circle: string;

    /**
     * @type {number}
     * @memberof CircleSubscription
     */
    amount: number;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    subscription: string;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    type: string;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    pack: CircleSubscriptionPackEnum;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    status: CircleSubscriptionStatusEnum;

    /**
     * @type {Array<any>}
     * @memberof CircleSubscription
     */
    invoices: Array<any>;

    /**
     * @type {any}
     * @memberof CircleSubscription
     */
    billingPeriod: any;

    /**
     * @type {boolean}
     * @memberof CircleSubscription
     */
    active: boolean;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    explanation: string;

    /**
     * @type {boolean}
     * @memberof CircleSubscription
     */
    canceled: boolean;

    /**
     * @type {User}
     * @memberof CircleSubscription
     */
    user: User;

    /**
     * @type {Circle}
     * @memberof CircleSubscription
     */
    circle: Circle;

    /**
     * @type {string}
     * @memberof CircleSubscription
     */
    createdAt: string;
}

/**
 * @export
 * @enum {string}
 */
export enum CircleSubscriptionPackEnum {
    STARTER = 'STARTER',
    ADVOCATE = 'ADVOCATE',
    CHANGER = 'CHANGER',
    TRIAL = 'TRIAL',
    ORGANIZATION = 'ORGANIZATION'
}
/**
 * @export
 * @enum {string}
 */
export enum CircleSubscriptionStatusEnum {
    PREORDERED = 'PREORDERED',
    PAID = 'PAID',
    LATE = 'LATE',
    CANCELED = 'CANCELED'
}

