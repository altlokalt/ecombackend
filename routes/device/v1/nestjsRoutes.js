/**
 * nestjsRoutes.js
 * @description :: CRUD API routes for nestjs
 */

const express = require('express');
const router = express.Router();
const nestjsController = require('../../../controller/device/v1/nestjsController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/device/api/v1/nestjs/create').post(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.addNestjs);
router.route('/device/api/v1/nestjs/list').post(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.findAllNestjs);
router.route('/device/api/v1/nestjs/count').post(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.getNestjsCount);
router.route('/device/api/v1/nestjs/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.getNestjs);
router.route('/device/api/v1/nestjs/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.updateNestjs);    
router.route('/device/api/v1/nestjs/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.partialUpdateNestjs);
router.route('/device/api/v1/nestjs/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.softDeleteNestjs);
router.route('/device/api/v1/nestjs/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.softDeleteManyNestjs);
router.route('/device/api/v1/nestjs/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.bulkInsertNestjs);
router.route('/device/api/v1/nestjs/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.bulkUpdateNestjs);
router.route('/device/api/v1/nestjs/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.deleteNestjs);
router.route('/device/api/v1/nestjs/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,nestjsController.deleteManyNestjs);

module.exports = router;
