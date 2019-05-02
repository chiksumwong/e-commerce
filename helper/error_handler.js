module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    
    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ error_message: 'Invalid Token / Token Not Found' });
    }

    // default to 400 server error
    return res.status(400).json({ error_message: err.message });

    // default to 500 server error
    return res.status(500).json({ error_message: err.message });
}