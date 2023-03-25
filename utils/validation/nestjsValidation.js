/**
 * nestjsValidation.js
 * @description :: validate each post and put request as per nestjs model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of nestjs */
exports.schemaKeys = joi.object({
  Controllers: joi.string().allow(null).allow(''),
  Services: joi.string().allow(null).allow(''),
  Modules: joi.string().allow(null).allow(''),
  Pipes: joi.string().allow(null).allow(''),
  Interceptors: joi.string().allow(null).allow(''),
  Guards: joi.string().allow(null).allow(''),
  DTOs: joi.string().allow(null).allow(''),
  TypeORM: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of nestjs for updation */
exports.updateSchemaKeys = joi.object({
  Controllers: joi.string().allow(null).allow(''),
  Services: joi.string().allow(null).allow(''),
  Modules: joi.string().allow(null).allow(''),
  Pipes: joi.string().allow(null).allow(''),
  Interceptors: joi.string().allow(null).allow(''),
  Guards: joi.string().allow(null).allow(''),
  DTOs: joi.string().allow(null).allow(''),
  TypeORM: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of nestjs for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      Controllers: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      Services: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      Modules: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      Pipes: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      Interceptors: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      Guards: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      DTOs: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      TypeORM: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
