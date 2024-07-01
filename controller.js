require("dotenv").config();

exports.login = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    console.log(process.env.USER_NAME, process.env.PASSWORD)
    if (username === process.env.USER_NAME && password === process.env.PASSWORD) {
        res.status(200).send('Login success');
    } else {
        res.status(401).send('Invalid credentials');
    }
}

