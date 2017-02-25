var pg = require('pg');

var client = new pg.Client({
    database: 'gruber',
    user: 'postgres'
});

var dbConnected = false;

client.connect(function (err) {
    if (err) return console.log(err);
    console.log('db connected');
    dbConnected = true;
});

module.exports = {
    getHistory: function(req, res) {
        if (!dbConnected) return res.status(503).end();
        var query = 'SELECT * FROM location_reports.location_history WHERE uid = $1'; // just example
        client.query(query, [req.params.uid], function (err, result) {
            if (err) return res.status(500).send(err);
            console.log(result.rows[0]);
            return res.status(200).send(result.rows);
        });
    }
};
