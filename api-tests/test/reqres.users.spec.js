const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL || 'https://reqres.in';
const agent = request(BASE_URL);
const UA = 'qa-api-portfolio';

describe('ReqRes - Users API', function () {
  it('GET /api/users?page=1 should return 200 and expected structure', async function () {
    const res = await agent.get('/api/users?page=1').set('User-Agent', UA);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('page');
    expect(res.body).to.have.property('per_page');
    expect(res.body).to.have.property('total');
    expect(res.body).to.have.property('data');
    expect(res.body.data).to.be.an('array');
    expect(res.body.data.length).to.be.greaterThan(0);
  });

  it('GET /api/users/2 should return 200 and user id=2', async function () {
    const res = await agent.get('/api/users/2').set('User-Agent', UA);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('data');
    expect(res.body.data).to.have.property('id', 2);
  });

  it('GET /api/users/999 should return 404', async function () {
    const res = await agent.get('/api/users/999').set('User-Agent', UA);
    expect(res.status).to.equal(404);
  });

  it('POST /api/users should return 201 and include id & createdAt', async function () {
    const payload = { name: 'Yassine', job: 'QA Engineer' };
    const res = await agent.post('/api/users').set('User-Agent', UA).send(payload);

    expect(res.status).to.equal(201);
    expect(res.body).to.include({ name: payload.name, job: payload.job });
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('createdAt');
  });

  it('PUT /api/users/2 should return 200 and include updatedAt', async function () {
    const payload = { name: 'Yassine', job: 'QA Engineer' };
    const res = await agent.put('/api/users/2').set('User-Agent', UA).send(payload);

    expect(res.status).to.equal(200);
    expect(res.body).to.include({ name: payload.name, job: payload.job });
    expect(res.body).to.have.property('updatedAt');
  });

  it('PATCH /api/users/2 should return 200 and include updatedAt', async function () {
    const payload = { job: 'QA Engineer' };
    const res = await agent.patch('/api/users/2').set('User-Agent', UA).send(payload);

    expect(res.status).to.equal(200);
    expect(res.body).to.include({ job: payload.job });
    expect(res.body).to.have.property('updatedAt');
  });

  it('DELETE /api/users/2 should return 204', async function () {
    const res = await agent.delete('/api/users/2').set('User-Agent', UA);
    expect(res.status).to.equal(204);
  });
});
