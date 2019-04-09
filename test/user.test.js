require("../app");

const chai = require('chai');
const request = require('supertest');

const api = request('http://localhost:3000/api/v1');

describe('User', () => {

  let url;
  let token;
  let expect = chai.expect;

  before((done) => {
    api.post('/login')
      .set('Accept', 'application/json')
      .send({
        email: 'boby@example.com',
        password: '1234'
      })
      .expect(200)
      .end((err, res) => {
        url = '/user/' + res.body.user_id;
        token = 'Bearer ' + res.body.token;
        done();
      });
  });

  it('Get A User', (done) => {
    api.get(url)
      .set('Authorization', token)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body).to.have.property('username');
        expect(res.body.username).to.equal('Boby');
        expect(res.body).to.have.property('email');
        expect(res.body.email).to.equal('boby@example.com');
      });
      done();
  });

});