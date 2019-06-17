'use strict';

const
    Company = require('../../src/models/companyModel').Company

module.exports = () => (

    [
        new Company({
            fantasyName: 'Zoox',
            plan: {
                name: 'Business'
            },
            phone: '(xx) xxxx-xxxx',
            isActive: true
        })
    ]

)