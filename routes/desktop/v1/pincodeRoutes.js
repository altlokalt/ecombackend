/**
 * pincodeRoutes.js
 * @description :: CRUD API routes for pincode
 */

const express = require('express');
const router = express.Router();
const pincodeController = require('../../../controller/desktop/v1/pincodeController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/pincode/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.addPincode);
router.route('/desktop/api/v1/pincode/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.findAllPincode);
router.route('/desktop/api/v1/pincode/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.getPincodeCount);
router.route('/desktop/api/v1/pincode/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.getPincode);
router.route('/desktop/api/v1/pincode/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.updatePincode);    
router.route('/desktop/api/v1/pincode/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.partialUpdatePincode);
router.route('/desktop/api/v1/pincode/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.softDeletePincode);
router.route('/desktop/api/v1/pincode/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.softDeleteManyPincode);
router.route('/desktop/api/v1/pincode/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.bulkInsertPincode);
router.route('/desktop/api/v1/pincode/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.bulkUpdatePincode);
router.route('/desktop/api/v1/pincode/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.deletePincode);
router.route('/desktop/api/v1/pincode/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,pincodeController.deleteManyPincode);

module.exports = router;
