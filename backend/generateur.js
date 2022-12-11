module.exports = function() {
    const { faker } = require('@faker-js/faker');
    const _ = require('lodash');
    return {
        users: _.times(800, (n) => {
            const gender = faker.name.sexType();
            const prefix = faker.name.prefix(gender);
            const firstname = faker.name.firstName(gender);
            const lastname = faker.name.lastName(gender);
            const username = faker.internet.userName(firstname, lastname);
            const email = faker.internet.email(firstname, lastname);
            return {
                id: faker.datatype.uuid(),
                prefix,
                firstname,
                lastname,
                username,
                gender,
                email,
                avatar: faker.internet.avatar(),
                position: faker.name.jobTitle(),
                birthdate: faker.date.birthdate(),
                phone: faker.phone.number('5##-###-###'),
                cell: faker.phone.number('60#-###-###'),
                location: {
                    street: faker.address.streetAddress(true),
                    city: faker.address.cityName(),
                    country: faker.address.country()
                },
                born: faker.address.countryCode()
            }
        })
    }
}