/**
 * stateRoutes.js
 * @description :: CRUD API routes for state
 */

const express = require('express');
const router = express.Router();
const stateController = require('../../../controller/desktop/v1/stateController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/state/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.addState);
router.route('/desktop/api/v1/state/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.findAllState);
router.route('/desktop/api/v1/state/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.getStateCount);
router.route('/desktop/api/v1/state/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.getState);
router.route('/desktop/api/v1/state/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.updateState);    
router.route('/desktop/api/v1/state/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.partialUpdateState);
router.route('/desktop/api/v1/state/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.softDeleteState);
router.route('/desktop/api/v1/state/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.softDeleteManyState);
router.route('/desktop/api/v1/state/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.bulkInsertState);
router.route('/desktop/api/v1/state/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.bulkUpdateState);
router.route('/desktop/api/v1/state/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.deleteState);
router.route('/desktop/api/v1/state/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,stateController.deleteManyState);

module.exports = router;
