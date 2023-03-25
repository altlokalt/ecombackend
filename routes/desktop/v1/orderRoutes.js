/**
 * orderRoutes.js
 * @description :: CRUD API routes for order
 */

const express = require('express');
const router = express.Router();
const orderController = require('../../../controller/desktop/v1/orderController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/order/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.addOrder);
router.route('/desktop/api/v1/order/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.findAllOrder);
router.route('/desktop/api/v1/order/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.getOrderCount);
router.route('/desktop/api/v1/order/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.getOrder);
router.route('/desktop/api/v1/order/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.updateOrder);    
router.route('/desktop/api/v1/order/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.partialUpdateOrder);
router.route('/desktop/api/v1/order/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.softDeleteOrder);
router.route('/desktop/api/v1/order/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.softDeleteManyOrder);
router.route('/desktop/api/v1/order/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.bulkInsertOrder);
router.route('/desktop/api/v1/order/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.bulkUpdateOrder);
router.route('/desktop/api/v1/order/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.deleteOrder);
router.route('/desktop/api/v1/order/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,orderController.deleteManyOrder);

module.exports = router;
