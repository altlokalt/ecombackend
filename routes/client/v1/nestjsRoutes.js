/**
 * nestjsRoutes.js
 * @description :: CRUD API routes for nestjs
 */

const express = require('express');
const router = express.Router();
const nestjsController = require('../../../controller/client/v1/nestjsController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/client/api/v1/nestjs/create').post(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.addNestjs);
router.route('/client/api/v1/nestjs/list').post(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.findAllNestjs);
router.route('/client/api/v1/nestjs/count').post(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.getNestjsCount);
router.route('/client/api/v1/nestjs/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.getNestjs);
router.route('/client/api/v1/nestjs/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.updateNestjs);    
router.route('/client/api/v1/nestjs/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.partialUpdateNestjs);
router.route('/client/api/v1/nestjs/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.softDeleteNestjs);
router.route('/client/api/v1/nestjs/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.softDeleteManyNestjs);
router.route('/client/api/v1/nestjs/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.bulkInsertNestjs);
router.route('/client/api/v1/nestjs/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.bulkUpdateNestjs);
router.route('/client/api/v1/nestjs/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.deleteNestjs);
router.route('/client/api/v1/nestjs/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,nestjsController.deleteManyNestjs);

module.exports = router;
