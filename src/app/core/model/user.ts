/**
 * O Alvo API - OpenAPI 3.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { Area } from './area';
import { Bag } from './bag';
import { CellMember } from './cellMember';
import { Children } from './children';
import { EventLine } from './eventLine';
import { Menu } from './menu';
import { Ministry } from './ministry';

export class User { 
    name?: string;
    email?: string;
    phoneNumber?: string;
    birthday?: string;
    document?: string;
    password?: string;
    status?: string;
    spouse?: User;
    childrens?: Array<Children>;
    cellMember?: Array<CellMember>;
    address?: Array<Address>;
    ministries?: Array<Ministry>;
    menus?: Array<Menu>;
    events?: Array<EventLine>;
    shoppingBag?: Array<Bag>;
    area?: Array<Area>;
    createAt?: string;
    updateAt?: string;
}