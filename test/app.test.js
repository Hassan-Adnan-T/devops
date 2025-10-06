const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return Hello World Small Project to practice devops', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello World Small Project to practice devops');
    });
});