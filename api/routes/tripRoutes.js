'use strict';
module.exports = function (app) {
    var trips = require('../controllers/tripController');

    app.route('/v1/trips')
        .get(trips.list_all_trips)
        .post(trips.create_a_trip);

    app.route('/v1/trips/search') // Must receive parameter 'keyword'.
        .get(trips.search_from_keyword);

    app.route('/v1/trips/:tripId')
        .get(trips.read_a_trip)
        .put(trips.update_a_trip)
        .delete(trips.delete_a_trip);

    app.route('/v1/trips/:tripId/publish')
        .put(trips.publish_a_trip);

    app.route('/v1/trips/:tripId/cancel')
        .put(trips.cancel_a_trip);
};
