/**
 * cityRoutes.js
 * @description :: CRUD API routes for city
 */

const express = require('express');
const router = express.Router();
const cityController = require('../../../controller/desktop/v1/cityController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/city/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.addCity);
router.route('/desktop/api/v1/city/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.findAllCity);
router.route('/desktop/api/v1/city/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.getCityCount);
router.route('/desktop/api/v1/city/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.getCity);
router.route('/desktop/api/v1/city/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.updateCity);    
router.route('/desktop/api/v1/city/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.partialUpdateCity);
router.route('/desktop/api/v1/city/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.softDeleteCity);
router.route('/desktop/api/v1/city/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.softDeleteManyCity);
router.route('/desktop/api/v1/city/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.bulkInsertCity);
router.route('/desktop/api/v1/city/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.bulkUpdateCity);
router.route('/desktop/api/v1/city/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.deleteCity);
router.route('/desktop/api/v1/city/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,cityController.deleteManyCity);

module.exports = router;
