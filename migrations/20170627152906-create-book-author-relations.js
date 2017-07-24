'use strict';

module.exports = {
  up: queryInterface => queryInterface.sequelize.query(
    'ALTER TABLE "books" ADD COLUMN "authorId" UUID, ' +
    'ADD FOREIGN KEY ("authorId") REFERENCES "authors"(id) ' +
    'ON UPDATE CASCADE ON DELETE SET NULL'),
  down: queryInterface => queryInterface.sequelize.query(
      'ALTER TABLE "books" DROP CONSTRAINT "books_authorId_fkey", DROP COLUMN "authorId"')
};
