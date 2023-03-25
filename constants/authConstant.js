/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  DEVICE_SECRET:'myjwtdevicesecret',
  CLIENT_SECRET:'myjwtclientsecret',
  DESKTOP_SECRET:'myjwtdesktopsecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = {
  User:1,
  Admin:2,
};

const PLATFORM = {
  ADMIN:1,
  DEVICE:2,
  CLIENT:3,
  DESKTOP:4,
};

let LOGIN_ACCESS = {
  [USER_TYPES.User]:[PLATFORM.ADMIN,PLATFORM.DEVICE,PLATFORM.CLIENT,PLATFORM.DESKTOP],        
  [USER_TYPES.Admin]:[PLATFORM.ADMIN,PLATFORM.DEVICE,PLATFORM.DESKTOP,PLATFORM.CLIENT],        
};

const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 2;   

const SEND_LOGIN_OTP = { EMAIL:1, };
const DEFAULT_SEND_LOGIN_OTP = SEND_LOGIN_OTP.EMAIL;

const FORGOT_PASSWORD_WITH = {
  LINK: {
    sms: true,
    email: true
  },
  EXPIRE_TIME: 10
};
const NO_OF_DEVICE_ALLOWED = 10;

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  SEND_LOGIN_OTP,
  DEFAULT_SEND_LOGIN_OTP,
  FORGOT_PASSWORD_WITH,
  NO_OF_DEVICE_ALLOWED,
  LOGIN_ACCESS,
};