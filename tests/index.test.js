const request = require('supertest');

describe('server', () => {
    let server;

    beforeEach(() => server = require('../index'));
    afterEach(async() => await server.close());

    it('should work', async() => {
        const res = await request(server).get('/');
        expect(res.body).toHaveProperty('message', 'Hello World!');
    })
})