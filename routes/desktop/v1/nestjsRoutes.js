/**
 * nestjsRoutes.js
 * @description :: CRUD API routes for nestjs
 */

const express = require('express');
const router = express.Router();
const nestjsController = require('../../../controller/desktop/v1/nestjsController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/nestjs/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.addNestjs);
router.route('/desktop/api/v1/nestjs/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.findAllNestjs);
router.route('/desktop/api/v1/nestjs/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.getNestjsCount);
router.route('/desktop/api/v1/nestjs/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.getNestjs);
router.route('/desktop/api/v1/nestjs/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.updateNestjs);    
router.route('/desktop/api/v1/nestjs/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.partialUpdateNestjs);
router.route('/desktop/api/v1/nestjs/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.softDeleteNestjs);
router.route('/desktop/api/v1/nestjs/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.softDeleteManyNestjs);
router.route('/desktop/api/v1/nestjs/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.bulkInsertNestjs);
router.route('/desktop/api/v1/nestjs/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.bulkUpdateNestjs);
router.route('/desktop/api/v1/nestjs/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.deleteNestjs);
router.route('/desktop/api/v1/nestjs/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,nestjsController.deleteManyNestjs);

module.exports = router;
