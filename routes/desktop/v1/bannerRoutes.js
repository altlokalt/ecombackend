/**
 * bannerRoutes.js
 * @description :: CRUD API routes for banner
 */

const express = require('express');
const router = express.Router();
const bannerController = require('../../../controller/desktop/v1/bannerController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/desktop/api/v1/banner/create').post(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.addBanner);
router.route('/desktop/api/v1/banner/list').post(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.findAllBanner);
router.route('/desktop/api/v1/banner/count').post(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.getBannerCount);
router.route('/desktop/api/v1/banner/:id').get(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.getBanner);
router.route('/desktop/api/v1/banner/update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.updateBanner);    
router.route('/desktop/api/v1/banner/partial-update/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.partialUpdateBanner);
router.route('/desktop/api/v1/banner/softDelete/:id').put(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.softDeleteBanner);
router.route('/desktop/api/v1/banner/softDeleteMany').put(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.softDeleteManyBanner);
router.route('/desktop/api/v1/banner/addBulk').post(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.bulkInsertBanner);
router.route('/desktop/api/v1/banner/updateBulk').put(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.bulkUpdateBanner);
router.route('/desktop/api/v1/banner/delete/:id').delete(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.deleteBanner);
router.route('/desktop/api/v1/banner/deleteMany').post(auth(PLATFORM.DESKTOP),checkRolePermission,bannerController.deleteManyBanner);

module.exports = router;
