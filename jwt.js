const expressJwt = require('express-jwt'); // For verifies token
const config = require('./config');
const userController = require('./controllers/user.controller')

module.exports = jwt;

function jwt() {
    const secret = config.JWT_SECRET_KEY;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/api/v1/registration',
            '/api/v1/login'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userController.getById(payload.user_id);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};