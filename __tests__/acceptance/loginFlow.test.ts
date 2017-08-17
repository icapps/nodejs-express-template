import request from 'supertest';
import app from '../../src';

describe('it does stuff', () => {
  it('blaba', async () => {
    await request(app)
      .post('/api/v1/login')
      .send({ email: 'blabla@me.com', password: 'notSoRandom' })
      .expect(200);
  });
});
