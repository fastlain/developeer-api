exports.CLIENT_ORIGIN = process.env.CLIENT_BASE_URL || "http://localhost:3000";
exports.DATABASE_URL = process.env.DATABASE_URL ||
    'mongodb://localhost/developeer';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
    'mongodb://localhost/test-developeer';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'testkey';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';