require("../app");

const chai = require('chai');
const request = require('supertest');

const api = request('http://localhost:3000/api/v1');

describe('Product', () => {

  let expect = chai.expect;
  let product_id_url;

  it('Create then delete product', (done) => {
    api.post('/product')
      .set({
        Accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
      })
      .send({
        name: "product15",
        description: "product is good",
        marked_price: 150.5,
        selling_price: 100.5,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        product_id_url = '/product/' + res.body._id;
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('description');
        expect(res.body.description).to.equal('product is good');
      });

    // api.delete(product_id_url)
    //   .set({
    //     Accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
    //   })
    //   .expect(200)
    done();
  });
  //   it('Update product', (done) => {
  //     api.get(url)
  //       .set('Authorization', token)
  //       .expect(200)
  //       .end((err, res) => {
  //         if (err) {
  //           return done(err);
  //         }
  //         expect(res.body).to.have.property('username');
  //         expect(res.body.username).to.equal('Boby');
  //         expect(res.body).to.have.property('email');
  //         expect(res.body.email).to.equal('boby@example.com');
  //         done();
  //       });
  //   });
  //   it('Select product', (done) => {
  //     api.get(url)
  //       .set('Authorization', token)
  //       .expect(200)
  //       .end((err, res) => {
  //         if (err) {
  //           return done(err);
  //         }
  //         expect(res.body).to.have.property('username');
  //         expect(res.body.username).to.equal('Boby');
  //         expect(res.body).to.have.property('email');
  //         expect(res.body.email).to.equal('boby@example.com');
  //         done();
  //       });
  //   });
});