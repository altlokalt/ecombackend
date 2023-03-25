/**
 * nestjsController.js
 * @description : exports action methods for nestjs.
 */

const Nestjs = require('../../model/nestjs');
const nestjsSchemaKey = require('../../utils/validation/nestjsValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const ObjectId = require('mongodb').ObjectId;
const utils = require('../../utils/common');
   
/**
 * @description : create document of Nestjs in mongodb collection.
 * @param {Object} req : request including body for creating document.
 * @param {Object} res : response of created document
 * @return {Object} : created Nestjs. {status, message, data}
 */ 
const addNestjs = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      nestjsSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    dataToCreate.addedBy = req.user.id;
    dataToCreate = new Nestjs(dataToCreate);
    let createdNestjs = await dbService.create(Nestjs,dataToCreate);
    return res.success({ data : createdNestjs });
  } catch (error) {
    return res.internalServerError({ message:error.message }); 
  }
};
    
/**
 * @description : create multiple documents of Nestjs in mongodb collection.
 * @param {Object} req : request including body for creating documents.
 * @param {Object} res : response of created documents.
 * @return {Object} : created Nestjss. {status, message, data}
 */
const bulkInsertNestjs = async (req,res)=>{
  try {
    if (req.body && (!Array.isArray(req.body.data) || req.body.data.length < 1)) {
      return res.badRequest();
    }
    let dataToCreate = [ ...req.body.data ];
    for (let i = 0;i < dataToCreate.length;i++){
      dataToCreate[i] = {
        ...dataToCreate[i],
        addedBy: req.user.id
      };
    }
    let createdNestjss = await dbService.create(Nestjs,dataToCreate);
    createdNestjss = { count: createdNestjss ? createdNestjss.length : 0 };
    return res.success({ data:{ count:createdNestjss.count || 0 } });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : find all documents of Nestjs from collection based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, pagination, populate}, isCountOnly}
 * @param {Object} res : response contains data found from collection.
 * @return {Object} : found Nestjs(s). {status, message, data}
 */
const findAllNestjs = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      nestjsSchemaKey.findFilterKeys,
      Nestjs.schema.obj
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.query === 'object' && req.body.query !== null) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      let totalRecords = await dbService.count(Nestjs, query);
      return res.success({ data: { totalRecords } });
    }
    if (req.body && typeof req.body.options === 'object' && req.body.options !== null) {
      options = { ...req.body.options };
    }
    let foundNestjss = await dbService.paginate( Nestjs,query,options);
    if (!foundNestjss || !foundNestjss.data || !foundNestjss.data.length){
      return res.recordNotFound(); 
    }
    return res.success({ data :foundNestjss });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
        
/**
 * @description : find document of Nestjs from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains document retrieved from table.
 * @return {Object} : found Nestjs. {status, message, data}
 */
const getNestjs = async (req,res) => {
  try {
    let query = {};
    if (!ObjectId.isValid(req.params.id)) {
      return res.validationError({ message : 'invalid objectId.' });
    }
    query._id = req.params.id;
    let options = {};
    let foundNestjs = await dbService.findOne(Nestjs,query, options);
    if (!foundNestjs){
      return res.recordNotFound();
    }
    return res.success({ data :foundNestjs });
  }
  catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : returns total number of documents of Nestjs.
 * @param {Object} req : request including where object to apply filters in req body 
 * @param {Object} res : response that returns total number of documents.
 * @return {Object} : number of documents. {status, message, data}
 */
const getNestjsCount = async (req,res) => {
  try {
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      nestjsSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.where === 'object' && req.body.where !== null) {
      where = { ...req.body.where };
    }
    let countedNestjs = await dbService.count(Nestjs,where);
    return res.success({ data : { count: countedNestjs } });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : update document of Nestjs with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Nestjs.
 * @return {Object} : updated Nestjs. {status, message, data}
 */
const updateNestjs = async (req,res) => {
  try {
    let dataToUpdate = {
      ...req.body,
      updatedBy:req.user.id,
    };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      nestjsSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { _id:req.params.id };
    let updatedNestjs = await dbService.updateOne(Nestjs,query,dataToUpdate);
    if (!updatedNestjs){
      return res.recordNotFound();
    }
    return res.success({ data :updatedNestjs });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : update multiple records of Nestjs with data by filter.
 * @param {Object} req : request including filter and data in request body.
 * @param {Object} res : response of updated Nestjss.
 * @return {Object} : updated Nestjss. {status, message, data}
 */
const bulkUpdateNestjs = async (req,res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    delete dataToUpdate['addedBy'];
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = { 
        ...req.body.data,
        updatedBy : req.user.id
      };
    }
    let updatedNestjs = await dbService.updateMany(Nestjs,filter,dataToUpdate);
    if (!updatedNestjs){
      return res.recordNotFound();
    }
    return res.success({ data :{ count : updatedNestjs } });
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};
    
/**
 * @description : partially update document of Nestjs with data by id;
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated Nestjs.
 * @return {obj} : updated Nestjs. {status, message, data}
 */
const partialUpdateNestjs = async (req,res) => {
  try {
    if (!req.params.id){
      res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }
    delete req.body['addedBy'];
    let dataToUpdate = {
      ...req.body,
      updatedBy:req.user.id,
    };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      nestjsSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { _id:req.params.id };
    let updatedNestjs = await dbService.updateOne(Nestjs, query, dataToUpdate);
    if (!updatedNestjs) {
      return res.recordNotFound();
    }
    return res.success({ data:updatedNestjs });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
/**
 * @description : deactivate document of Nestjs from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated document of Nestjs.
 * @return {Object} : deactivated Nestjs. {status, message, data}
 */
const softDeleteNestjs = async (req,res) => {
  try {
    if (!req.params.id){
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }
    let query = { _id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    let updatedNestjs = await dbService.updateOne(Nestjs, query, updateBody);
    if (!updatedNestjs){
      return res.recordNotFound();
    }
    return res.success({ data:updatedNestjs });
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};

/**
 * @description : delete document of Nestjs from table.
 * @param {Object} req : request including id as req param.
 * @param {Object} res : response contains deleted document.
 * @return {Object} : deleted Nestjs. {status, message, data}
 */
const deleteNestjs = async (req,res) => {
  try { 
    if (!req.params.id){
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }
    const query = { _id:req.params.id };
    const deletedNestjs = await dbService.deleteOne(Nestjs, query);
    if (!deletedNestjs){
      return res.recordNotFound();
    }
    return res.success({ data :deletedNestjs });
        
  }
  catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : delete documents of Nestjs in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of documents deleted.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyNestjs = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    const query = { _id:{ $in:ids } };
    const deletedNestjs = await dbService.deleteMany(Nestjs,query);
    if (!deletedNestjs){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :deletedNestjs } });
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};
/**
 * @description : deactivate multiple documents of Nestjs from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated documents of Nestjs.
 * @return {Object} : number of deactivated documents of Nestjs. {status, message, data}
 */
const softDeleteManyNestjs = async (req,res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    const query = { _id:{ $in:ids } };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    let updatedNestjs = await dbService.updateMany(Nestjs,query, updateBody);
    if (!updatedNestjs) {
      return res.recordNotFound();
    }
    return res.success({ data:{ count :updatedNestjs } });
        
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};

module.exports = {
  addNestjs,
  bulkInsertNestjs,
  findAllNestjs,
  getNestjs,
  getNestjsCount,
  updateNestjs,
  bulkUpdateNestjs,
  partialUpdateNestjs,
  softDeleteNestjs,
  deleteNestjs,
  deleteManyNestjs,
  softDeleteManyNestjs    
};