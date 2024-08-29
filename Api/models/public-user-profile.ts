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

import { Bio } from './bio';
import { Care } from './care';
import { ClimateWins } from './climate-wins';
import { SkillType } from './skill-type';
 /**
 * 
 *
 * @export
 * @interface PublicUserProfile
 */
export interface PublicUserProfile {

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    role?: PublicUserProfileRoleEnum;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    firstname?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    lastname?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    avatar?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    username?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    description?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    city?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    video?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    audio?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    cover?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    referralId?: string;

    /**
     * @type {Array<string>}
     * @memberof PublicUserProfile
     */
    badges?: Array<PublicUserProfileBadgesEnum>;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    country?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    email?: string;

    /**
     * @type {Array<string>}
     * @memberof PublicUserProfile
     */
    skills?: Array<string>;

    /**
     * @type {Array<string>}
     * @memberof PublicUserProfile
     */
    cares?: Array<string>;

    /**
     * @type {Array<Care>}
     * @memberof PublicUserProfile
     */
    cares?: Array<Care>;

    /**
     * @type {Array<SkillType>}
     * @memberof PublicUserProfile
     */
    skills?: Array<SkillType>;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    fullName?: string;

    /**
     * @type {boolean}
     * @memberof PublicUserProfile
     */
    updates?: boolean;

    /**
     * @type {boolean}
     * @memberof PublicUserProfile
     */
    privateAccount?: boolean;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    youtube?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    twitter?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    website?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    slug?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    tiktok?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    instagram?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    facebook?: string;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    linkedin?: string;

    /**
     * @type {ClimateWins}
     * @memberof PublicUserProfile
     */
    climateWins?: ClimateWins;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    mobilizerType?: PublicUserProfileMobilizerTypeEnum;

    /**
     * @type {string}
     * @memberof PublicUserProfile
     */
    mobilizerMainTopic?: PublicUserProfileMobilizerMainTopicEnum;

    /**
     * @type {Array<string>}
     * @memberof PublicUserProfile
     */
    tags?: Array<string>;

    /**
     * @type {number}
     * @memberof PublicUserProfile
     */
    referredVisitors?: number;

    /**
     * @type {number}
     * @memberof PublicUserProfile
     */
    descriptionSize?: number;

    /**
     * @type {Bio}
     * @memberof PublicUserProfile
     */
    bio?: Bio;

    /**
     * @type {number}
     * @memberof PublicUserProfile
     */
    order?: number;

    /**
     * @type {boolean}
     * @memberof PublicUserProfile
     */
    featured?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum PublicUserProfileRoleEnum {
    SUPPORTER = 'SUPPORTER',
    MOBILIZER = 'MOBILIZER',
    ADMIN = 'ADMIN',
    LEADADMIN = 'LEAD-ADMIN',
    SUPERMOBILIZER = 'SUPER-MOBILIZER',
    AMBASSADOR = 'AMBASSADOR',
    PARTNER = 'PARTNER',
    ORGANIZATION = 'ORGANIZATION',
    TRIAL = 'TRIAL',
    TRIALSUPPORTER = 'TRIAL-SUPPORTER'
}
/**
 * @export
 * @enum {string}
 */
export enum PublicUserProfileBadgesEnum {
    Amplifier = 'Amplifier',
    Ambassador = 'Ambassador',
    Connections = 'Connections',
    PolicySupport = 'PolicySupport',
    Influence = 'Influence',
    WellBeing = 'WellBeing',
    StartedFromTheBottom = 'StartedFromTheBottom',
    MommaImUp = 'MommaImUp'
}
/**
 * @export
 * @enum {string}
 */
export enum PublicUserProfileMobilizerTypeEnum {
    CAMPAIGNER = 'CAMPAIGNER',
    RESEARCHER = 'RESEARCHER',
    POLICYCHANGER = 'POLICY_CHANGER',
    EDUCATOR = 'EDUCATOR'
}
/**
 * @export
 * @enum {string}
 */
export enum PublicUserProfileMobilizerMainTopicEnum {
    ForestLand = 'Forest & Land',
    Governance = 'Governance',
    Power = 'Power',
    CircularEconomy = 'Circular Economy',
    Finance = 'Finance'
}

