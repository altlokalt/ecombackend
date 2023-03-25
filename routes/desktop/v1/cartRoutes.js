/**
 * cartRoutes.js
 * @description :: CRUD API routes for cart
 */

const express = require('express');
const router = express.Router();
const cartController = require('../../../controller/desktop/v1/cartController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/cart/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.addCart);
router.route('/desktop/api/v1/cart/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.findAllCart);
router.route('/desktop/api/v1/cart/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.getCartCount);
router.route('/desktop/api/v1/cart/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.getCart);
router.route('/desktop/api/v1/cart/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.updateCart);    
router.route('/desktop/api/v1/cart/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.partialUpdateCart);
router.route('/desktop/api/v1/cart/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.softDeleteCart);
router.route('/desktop/api/v1/cart/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.softDeleteManyCart);
router.route('/desktop/api/v1/cart/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.bulkInsertCart);
router.route('/desktop/api/v1/cart/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.bulkUpdateCart);
router.route('/desktop/api/v1/cart/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.deleteCart);
router.route('/desktop/api/v1/cart/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,cartController.deleteManyCart);

module.exports = router;
