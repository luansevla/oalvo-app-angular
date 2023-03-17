/**
 * Tzion API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { Area } from './area';
import { User } from './user';

export interface Cell { 
    name?: string;
    leaders?: Array<any>;
    area?: any;
    address?: any;
    day?: string;
    schedule?: string;
    supervisors?: Array<any>;
    type?: Cell.TypeEnum;
    route?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export namespace Cell {
    export type TypeEnum = 'MISTA' | 'CASAIS' | 'SOLTEIRAS' | 'SOLTEIROS';
    export const TypeEnum = {
        MISTA: 'MISTA' as TypeEnum,
        CASAIS: 'CASAIS' as TypeEnum,
        SOLTEIRAS: 'SOLTEIRAS' as TypeEnum,
        SOLTEIROS: 'SOLTEIROS' as TypeEnum
    };
}