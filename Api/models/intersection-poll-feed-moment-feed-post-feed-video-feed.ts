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

import { FeedUser } from './feed-user';
import { PollVote } from './poll-vote';
 /**
 * 
 *
 * @export
 * @interface IntersectionPollFeedMomentFeedPostFeedVideoFeed
 */
export interface IntersectionPollFeedMomentFeedPostFeedVideoFeed {

    /**
     * @type {string}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    question?: string;

    /**
     * @type {Array<string>}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    options?: Array<string>;

    /**
     * @type {Array<PollVote>}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    votes?: Array<PollVote>;

    /**
     * @type {string}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    id: string;

    /**
     * @type {Date}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    createdAt: Date;

    /**
     * @type {string}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    type: IntersectionPollFeedMomentFeedPostFeedVideoFeedTypeEnum;

    /**
     * @type {FeedUser}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    user: FeedUser;

    /**
     * @type {string}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    title?: string;

    /**
     * @type {string}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    description?: string;

    /**
     * @type {string}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    file?: string;

    /**
     * @type {Array<string>}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    files?: Array<string>;

    /**
     * @type {string}
     * @memberof IntersectionPollFeedMomentFeedPostFeedVideoFeed
     */
    video?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum IntersectionPollFeedMomentFeedPostFeedVideoFeedTypeEnum {
    Post = 'post',
    Video = 'video',
    Moment = 'moment',
    Poll = 'poll'
}
