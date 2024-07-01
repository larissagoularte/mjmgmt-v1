require("dotenv").config();

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === process.env.USER_NAME && password === process.env.PASSWORD) {
        res.status(200).send('Login success');
    } else {
        res.status(401).send('Invalid credentials');
    }
}

