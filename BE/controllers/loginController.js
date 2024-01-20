const User = require("../models/User");
const loginRouter = require("../routes/loginRouter");
const jwt = require("jsonwebtoken");

exports.loginRequest = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        attributes: ["id", "password"],
        where: {
            username: username,
        },
    });
    if (user === null) {
        res.status(404).send("user not found");
    } else {
        const token = jwt.sign(
            {
                user: user,
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
            },
            process.env.SECRET_KEY,
            { algorithm: "HS256" }
        );
        if (user.password === password) {
            res.send({ token: token, id: user.id });
        } else {
            res.status(400).send("wrong password");
        }
    }
};
