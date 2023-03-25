/**
 * countryRoutes.js
 * @description :: CRUD API routes for country
 */

const express = require('express');
const router = express.Router();
const countryController = require('../../../controller/desktop/v1/countryController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/country/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.addCountry);
router.route('/desktop/api/v1/country/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.findAllCountry);
router.route('/desktop/api/v1/country/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.getCountryCount);
router.route('/desktop/api/v1/country/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.getCountry);
router.route('/desktop/api/v1/country/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.updateCountry);    
router.route('/desktop/api/v1/country/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.partialUpdateCountry);
router.route('/desktop/api/v1/country/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.softDeleteCountry);
router.route('/desktop/api/v1/country/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.softDeleteManyCountry);
router.route('/desktop/api/v1/country/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.bulkInsertCountry);
router.route('/desktop/api/v1/country/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.bulkUpdateCountry);
router.route('/desktop/api/v1/country/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.deleteCountry);
router.route('/desktop/api/v1/country/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,countryController.deleteManyCountry);

module.exports = router;
