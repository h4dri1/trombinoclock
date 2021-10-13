const dataMapper = require('../dataMapper');

const searchController = {
    searchPage: (req, res) => {
        res.render('search');
    },

    searchResult: (req, res) => {
        let research = req.body.research;
        research = research[0].toUpperCase() + research.slice(1);
        dataMapper.getStudentByResearch(research, (err, results) => {
            if(err)
                return res.status(500).send(err);
            if(results.rows !== undefined) {
                if(results.rows.length > 1) {
                    res.render('result', {
                        data: research,
                        result: results.rows,
                        multi: true
                    }); 
                } else if(results.rows.length === 1) {
                    res.render('result', {
                        data: req.body,
                        result: results.rows[0],
                        multi: false
                    }); 
                }
            } else {
                next();
            }
        });
    }
};

module.exports = searchController;