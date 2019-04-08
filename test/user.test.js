var app = require("../app");
const expect = require('chai');
const supertest = require('supertest');

const api = supertest('http://localhost:3000/api/v1');

let api_token;
let user_id;

before((done) => {
    api.post('/login')
      .set('Accept', 'application/json')
      .send({
        user_mail: 'boby@example.com',
        user_password: '1234'
      })
      .expect(200)
      .end((err, res) => {
        user_id = res.body.user_id,
        api_token = res.body.token;
        done();
      });
});

describe('User', () => {
    it('Get User Information', (done) => {
      api.get(`/user/ ${user_id}`)
        .set('Authorization', `Bearer ${api_token}`)
        .expect(200)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body[0]).to.have.property('username');
          expect(res.body[0].username).to.be.a('string');
          expect(res.body[0]).to.have.property('email');
          expect(res.body[0].email).to.be.a('string');
        });
        done();
    });
});