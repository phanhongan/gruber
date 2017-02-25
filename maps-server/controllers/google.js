var request = require('request');

var services = require('../config/services');
var distanceMatrixUrl = services.google.maps.distanceMatrix;

module.exports = {

    distanceMatrix: function(req, res) {
        var origin = req.query.origin;
        var destination = req.query.destination;
        var url = `${distanceMatrixUrl}?origins=${origin}&destinations=${destination}`;

        request(url, function (error, response, body) {
            if (error) return res.status(response.statusCode || 500).send(error);
            var result = JSON.parse(body);
            if (!result.rows.length) return res.status(404).send('not found');
            if (!result.rows[0].elements.length) return res.status(404).send('not found');
            return res.status(200).send({
                destination_addresses: result.destination_addresses,
                origin_addresses: result.origin_addresses,
                distance: result.rows[0].elements[0].distance,
                duration: result.rows[0].elements[0].duration
            });
        });
    }

};
