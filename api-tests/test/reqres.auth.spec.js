const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL || 'https://reqres.in';

describe('ReqRes - Auth API', function () {
  it('POST /api/register should succeed with token', async function () {
    const payload = { email: 'eve.holt@reqres.in', password: 'pistol' };
    const res = await request(BASE_URL).post('/api/register').send(payload);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
    expect(res.body.token).to.be.a('string').and.to.have.length.greaterThan(0);
  });

  it('POST /api/register should fail with 400 when password is missing', async function () {
    const payload = { email: 'sydney@fife' };
    const res = await request(BASE_URL).post('/api/register').send(payload);

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
  });

  it('POST /api/login should succeed with token', async function () {
    const payload = { email: 'eve.holt@reqres.in', password: 'cityslicka' };
    const res = await request(BASE_URL).post('/api/login').send(payload);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
    expect(res.body.token).to.be.a('string').and.to.have.length.greaterThan(0);
  });

  it('POST /api/login should fail with 400 when password is missing', async function () {
    const payload = { email: 'eve.holt@reqres.in' };
    const res = await request(BASE_URL).post('/api/login').send(payload);

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
  });
});
