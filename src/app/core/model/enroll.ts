/**
 * Tzion API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Area } from './area';
import { EventLine } from './event';

export class Enroll { 
    code?: string;
    event?: EventLine;
    name?: string;
    document?: string;
    age?: number;
    phoneNumber?: string;
    area?: Area;
    amount?: number;
    paymentMethod?: string;
    bank?: string;
    cardFlag?: string;
    status?: string;
    installment?: number;
    createdAt?: Date | string;
    uploadedAt?: Date | string;
    deletedAt?: Date | string;
}