const dataMapper = require('../dataMapper');

const searchController = {
    searchPage: (req, res) => {
        res.render('search');
    },

    searchResult: (req, res) => {
        const research = req.body.research;
        dataMapper.getStudentByResearch(research, (err, results) => {
            if(err) {
                console.error(err);
            }
            if(results.rows !== undefined) {
                if(results.rows.length > 1) {
                    res.render('result', {
                        data: req.body,
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