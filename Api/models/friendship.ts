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
 * @interface Friendship
 */
export interface Friendship {

    /**
     * @type {string}
     * @memberof Friendship
     */
    id: string;

    /**
     * @type {string}
     * @memberof Friendship
     */
    requester: string;

    /**
     * @type {string}
     * @memberof Friendship
     */
    requestee: string;

    /**
     * @type {string}
     * @memberof Friendship
     */
    status: FriendshipStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum FriendshipStatusEnum {
    Pending = 'pending',
    Accepted = 'accepted',
    Declined = 'declined'
}

