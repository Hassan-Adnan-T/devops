const require = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return Hello World Small Projeect to practice devops', async () => {
        const res = await require(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello World Small Projeect to practice devops');
    });
});