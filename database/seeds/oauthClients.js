'use strict';

const OAuthClient = require('../../src/models/oAuthClientModel').OAuthClient

module.exports = () => (
    [
        new OAuthClient({
            clientId: 'zoox',
            clientSecret: 'zoox@password'
        })

    ]
);