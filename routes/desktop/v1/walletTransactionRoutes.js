/**
 * walletTransactionRoutes.js
 * @description :: CRUD API routes for walletTransaction
 */

const express = require('express');
const router = express.Router();
const walletTransactionController = require('../../../controller/desktop/v1/walletTransactionController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/wallettransaction/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.addWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.findAllWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.getWalletTransactionCount);
router.route('/desktop/api/v1/wallettransaction/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.getWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.updateWalletTransaction);    
router.route('/desktop/api/v1/wallettransaction/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.partialUpdateWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.softDeleteWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.softDeleteManyWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.bulkInsertWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.bulkUpdateWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.deleteWalletTransaction);
router.route('/desktop/api/v1/wallettransaction/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletTransactionController.deleteManyWalletTransaction);

module.exports = router;
