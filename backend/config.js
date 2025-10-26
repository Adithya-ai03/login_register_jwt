// config.js - Environment Configuration Loader
require('dotenv').config();

const config = {
  // ===== Firebase Configuration =====
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.FIREBASE_APP_ID || ''
  },

  // ===== Application Configuration =====
  app: {
    name: process.env.APP_NAME || 'JWT Auth System',
    version: process.env.APP_VERSION || '1.0.0',
    description: process.env.APP_DESCRIPTION || '',
    environment: process.env.NODE_ENV || 'development',
    debug: process.env.DEBUG === 'true'
  },

  // ===== JWT Configuration =====
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY || '1h',
    algorithm: process.env.JWT_ALGORITHM || 'HS256'
  },

  // ===== Security Configuration =====
  security: {
    bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 12,
    sessionTimeout: Number(process.env.SESSION_TIMEOUT) || 3600, // seconds
    maxLoginAttempts: Number(process.env.MAX_LOGIN_ATTEMPTS) || 5,
    passwordMinLength: Number(process.env.PASSWORD_MIN_LENGTH) || 6
  },

  // ===== Server Configuration =====
  server: {
    port: Number(process.env.API_PORT) || 3000,
    baseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
    timeout: Number(process.env.API_TIMEOUT) || 10000, // milliseconds
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000'
  },

  // ===== Feature Flags =====
  features: {
    enableRegistration: process.env.ENABLE_REGISTRATION === 'true',
    enableEmailVerification: process.env.ENABLE_EMAIL_VERIFICATION === 'true',
    enablePasswordReset: process.env.ENABLE_PASSWORD_RESET === 'true',
    enableSocialLogin: process.env.ENABLE_SOCIAL_LOGIN === 'true'
  },

  // ===== Logging Configuration =====
  logging: {
    level: process.env.LOG_LEVEL || 'debug',
    file: process.env.LOG_FILE || 'logs/app.log',
    maxSize: process.env.LOG_MAX_SIZE || '10MB',
    maxFiles: Number(process.env.LOG_MAX_FILES) || 5
  }
};

// ===== Validate required environment variables =====
const requiredEnvVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'JWT_SECRET'
];

requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

console.log('✅ Environment configuration loaded successfully');
console.log(`🏷️  App: ${config.app.name}`);
console.log(`🌍 Environment: ${config.app.environment}`);
console.log(`🔧 Debug Mode: ${config.app.debug}`);

module.exports = config;
