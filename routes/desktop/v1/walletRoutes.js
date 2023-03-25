/**
 * walletRoutes.js
 * @description :: CRUD API routes for wallet
 */

const express = require('express');
const router = express.Router();
const walletController = require('../../../controller/desktop/v1/walletController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/wallet/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.addWallet);
router.route('/desktop/api/v1/wallet/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.findAllWallet);
router.route('/desktop/api/v1/wallet/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.getWalletCount);
router.route('/desktop/api/v1/wallet/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.getWallet);
router.route('/desktop/api/v1/wallet/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.updateWallet);    
router.route('/desktop/api/v1/wallet/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.partialUpdateWallet);
router.route('/desktop/api/v1/wallet/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.softDeleteWallet);
router.route('/desktop/api/v1/wallet/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.softDeleteManyWallet);
router.route('/desktop/api/v1/wallet/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.bulkInsertWallet);
router.route('/desktop/api/v1/wallet/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.bulkUpdateWallet);
router.route('/desktop/api/v1/wallet/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.deleteWallet);
router.route('/desktop/api/v1/wallet/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,walletController.deleteManyWallet);

module.exports = router;
