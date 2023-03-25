/**
 * nestjsRoutes.js
 * @description :: CRUD API routes for nestjs
 */

const express = require('express');
const router = express.Router();
const nestjsController = require('../../controller/admin/nestjsController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');

router.route('/admin/nestjs/create').post(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.addNestjs);
router.route('/admin/nestjs/list').post(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.findAllNestjs);
router.route('/admin/nestjs/count').post(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.getNestjsCount);
router.route('/admin/nestjs/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.getNestjs);
router.route('/admin/nestjs/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.updateNestjs);    
router.route('/admin/nestjs/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.partialUpdateNestjs);
router.route('/admin/nestjs/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.softDeleteNestjs);
router.route('/admin/nestjs/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.softDeleteManyNestjs);
router.route('/admin/nestjs/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.bulkInsertNestjs);
router.route('/admin/nestjs/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.bulkUpdateNestjs);
router.route('/admin/nestjs/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.deleteNestjs);
router.route('/admin/nestjs/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,nestjsController.deleteManyNestjs);

module.exports = router;
