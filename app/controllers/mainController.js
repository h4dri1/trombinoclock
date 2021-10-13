const dataMapper = require("../dataMapper");

const mainController = {
    homePage: (req, res) => {
        dataMapper.getNumberOf((err, results) => {
            if(err)
                return res.status(500).send(err);
            res.render('index', {
                numStudent: results.rows[1].count,
                numPromo: results.rows[0].count
            });
        });
    }
};

module.exports = mainController;