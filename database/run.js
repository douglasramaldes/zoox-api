'use strict';

const
    OAuthClient = require('../src/models/oAuthClientModel').OAuthClient,
    User = require('../src/models/userModel').User,
    createDocuments = require('./createDocuments'),
    _ = require('lodash'),
    co = require('co'),
    db = require('./dbConnect')

db.connection.on('connected', () => {
    co(function* () {
        try {
            yield new Promise((resolve, reject) => {
                db.connection.db.dropDatabase(err => {
                    if (err) throw err;
                    console.log('\t\x1b[41m', 'Database dropped', '\x1b[0m');
                    resolve();
                });
            });

            let oauthClients = yield createDocuments(require('./seeds/oauthClients')());
            let companies = yield createDocuments(require('./seeds/companies')());
            let users = yield createDocuments(require('./seeds/users')(companies, oauthClients));
            let states = yield createDocuments(require('./seeds/states.js')(users));
            let cities = yield createDocuments(require('./seeds/cities.js')(states, users));


        } catch (err) {
            console.error(err.stack);
        }
        console.log('\n\t\t', ':)');
        process.exit();
    });
});