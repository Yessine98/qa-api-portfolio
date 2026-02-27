const request = require('supertest');
const { expect } = require('chai');

const BASE_URL = process.env.BASE_URL || 'https://reqres.in';
const UA = 'qa-api-portfolio';

describe('Debug connectivity', function () {
  it('GET /api/users?page=1 should not be forbidden (403)', async function () {
    const res = await request(BASE_URL)
      .get('/api/users?page=1')
      .set('User-Agent', UA);

    console.log('Status:', res.status);
    console.log('Headers:', res.headers);
    console.log('Body:', res.body);

    expect(res.status).to.not.equal(403);
  });
});
