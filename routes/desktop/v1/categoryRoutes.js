/**
 * categoryRoutes.js
 * @description :: CRUD API routes for category
 */

const express = require('express');
const router = express.Router();
const categoryController = require('../../../controller/desktop/v1/categoryController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/category/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.addCategory);
router.route('/desktop/api/v1/category/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.findAllCategory);
router.route('/desktop/api/v1/category/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.getCategoryCount);
router.route('/desktop/api/v1/category/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.getCategory);
router.route('/desktop/api/v1/category/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.updateCategory);    
router.route('/desktop/api/v1/category/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.partialUpdateCategory);
router.route('/desktop/api/v1/category/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.softDeleteCategory);
router.route('/desktop/api/v1/category/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.softDeleteManyCategory);
router.route('/desktop/api/v1/category/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.bulkInsertCategory);
router.route('/desktop/api/v1/category/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.bulkUpdateCategory);
router.route('/desktop/api/v1/category/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.deleteCategory);
router.route('/desktop/api/v1/category/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,categoryController.deleteManyCategory);

module.exports = router;
