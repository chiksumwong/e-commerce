require("../app");

const chai = require('chai');
const request = require('supertest');
const api = request('http://localhost:3000/api/v1');

let expect = chai.expect;

describe('User', () => {

  let url;
  let token;
  
  /* Before Testing: Login user and get the token */
  before((done) => {
    api.post('/login')
      .set('Accept', 'application/json')
      .send({
        email: 'boby@example.com',
        password: '1234'
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        url = '/user/' + res.body.user_id;
        token = 'Bearer ' + res.body.token;
        done();
      });
  });
  /*
   * Test the /GET/:id route
   */
  describe('/Get/:id user', () => {
    it('it should Get a user by given id', (done) => {
      api.get(url)
        .set('Authorization', token)
        .end((err, res) => {
          if (err) return done(err);
          res.status.should.be.equal(200);
          expect(res.body).to.have.property('username');
          expect(res.body.username).to.equal('Boby');
          expect(res.body).to.have.property('email');
          expect(res.body.email).to.equal('boby@example.com');
        });
      done();
    });
  });

});