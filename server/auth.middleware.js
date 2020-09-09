const admin = require('./firebase-admin')


const getAuthToken = (req, res, next) => {
    console.log(req.headers);
    const { authorization } = req.headers
    if (authorization && authorization.split(" ")[0] === 'Bearer') {
        req.authToken = authorization.split(" ")[1]
    }else {
        req.authToken = null
    }

    next();
}

const checkAuthentication = (req, res, next) => {
    getAuthToken(req, res, async () => {
        try {
            const { authToken } = req
            const user = await admin.auth().verifyIdToken(authToken)
            console.log(user);
            return next()
        } catch (error) {
            console.log(error);
            return res.status(401).send({
                error: 'Not authenticated',
            })
        }
    })
}

module.exports = {
    checkAuthentication,
}