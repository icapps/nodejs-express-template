const uuid = require('uuid');

const authorOneId = uuid.v4();
const authorTwoId = uuid.v4();
const authorThreeId = uuid.v4();

// SEQUELIZE DB:SEED : we need to add id and timestamps manually
// since sequelize-cli does not use the models for seeding
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('authors', [
      {
        id: authorOneId,
        firstName: 'David',
        lastName: 'Van Reybrouck',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: authorTwoId,
        firstName: 'Robert',
        lastName: 'Martin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: authorThreeId,
        firstName: 'Douglas',
        lastName: 'Crockford',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ]).then(() => queryInterface.bulkInsert('books', [
      {
        id: uuid.v4(),
        title: 'Congo',
        published: '2014',
        authorId: authorOneId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: uuid.v4(),
        title: 'Clean Code',
        published: '2008',
        authorId: authorTwoId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: uuid.v4(),
        title: 'The Clean Coder',
        published: '2011',
        authorId: authorTwoId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: uuid.v4(),
        title: 'Javascript: the Good Parts',
        published: '2008',
        authorId: authorThreeId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ])
  ),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('books', null, {})
      .then(() => queryInterface.bulkDelete('authors', null, {})
  )
};
