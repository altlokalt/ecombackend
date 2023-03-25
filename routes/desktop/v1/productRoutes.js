/**
 * productRoutes.js
 * @description :: CRUD API routes for product
 */

const express = require('express');
const router = express.Router();
const productController = require('../../../controller/desktop/v1/productController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/product/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,productController.addProduct);
router.route('/desktop/api/v1/product/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,productController.findAllProduct);
router.route('/desktop/api/v1/product/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,productController.getProductCount);
router.route('/desktop/api/v1/product/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,productController.getProduct);
router.route('/desktop/api/v1/product/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,productController.updateProduct);    
router.route('/desktop/api/v1/product/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,productController.partialUpdateProduct);
router.route('/desktop/api/v1/product/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,productController.softDeleteProduct);
router.route('/desktop/api/v1/product/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,productController.softDeleteManyProduct);
router.route('/desktop/api/v1/product/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,productController.bulkInsertProduct);
router.route('/desktop/api/v1/product/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,productController.bulkUpdateProduct);
router.route('/desktop/api/v1/product/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,productController.deleteProduct);
router.route('/desktop/api/v1/product/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,productController.deleteManyProduct);

module.exports = router;
