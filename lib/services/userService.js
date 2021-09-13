const jwt = require('jsonwebtoken');
const { User } = require('../../model');
const config = require('../../config');

module.exports = {
    authenticate,
    getById,
    register
};

async function authenticate({ username, password }, res, next) {
    let result;
    const errMsg = 'username or password incorrect!';
    const user = await User.findOne({ username });
    if (!user) {
        return next(errMsg);
    }
    user.comparePassword(password, (err, isMatch) => {
        if (err) {
            return next(err);
        }

        if (!isMatch) {
            return next(errMsg);
        }

        const accessToken = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        return res.json({
            accessToken
        }); 
    });

    return result;
}

async function getById(id) {
    return await User.findById(id);
}

async function register(payload) {

    const existUser = await User.findOne({ $or: [{ username: payload.username }, { email: payload.email }] });

    if (existUser && existUser.username === payload.username) {
        throw new Error(`Username ${payload.username} already exist!`);
    } else if (existUser && existUser.email === payload.email) {
        throw new Error(`User is already registered with given email!`);
    }

    const user = new User(payload);
    console.log(payload);
    await user.save();
}
