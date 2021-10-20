const authController = {
    getLogin: (req, res) => {
        res.render('login', {
            status: 'Login'
        });
    },

    postLogin: (req, res) => {
        const userLogin = req.body.user;
        const userPass = req.body.pswd;   
        req.session.login = userLogin;
        req.session.password = userPass;
        res.redirect('/admin');
    },

    logout : (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = authController;