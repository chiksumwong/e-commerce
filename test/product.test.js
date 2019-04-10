require("../app");
const Product = require('./../models/product.model')

const chai = require('chai');
const request = require('supertest');
const api = request('http://localhost:3000/api/v1');

let expect = chai.expect;
let should = chai.should();

describe('Product', () => {

  /* Before Each Testing: Empty the Database */
  beforeEach((done) => {
    Product.remove({}, (err) => {
      if (err) return done(err);
      done();
    });
  });
  /* After Each Testing: Empty the Database */
  afterEach((done) => {
    Product.remove({}, (err) => {
      if (err) return done(err);
      done();
    });
  });
  /*
   * Test the /GET route
   */
  describe('/GET product', () => {
    it('it should GET all the product', (done) => {
      api.get('/products')
        .set({
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
        })
        .end((err, res) => {
          if (err) return done(err);
          res.status.should.be.equal(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
  /*
   * Test the /POST route
   */
  describe('/POST product', () => {
    it('it should POST a product', (done) => {
      let product = {
        name: "Samsung Galaxy S10",
        description: "Best Phone",
        marked_price: 6000,
        selling_price: 5000,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      }
      api.post('/product')
        .set({
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
        })
        .send(product)
        .end((err, res) => {
          if (err) return done(err);
          res.status.should.be.equal(200);
          res.body.should.have.property('name');
          res.body.should.have.property('description');
          res.body.should.have.property('marked_price');
          res.body.should.have.property('selling_price');
          res.body.should.have.property('images');
          done();
        });
    });

  });
  /*
   * Test the /GET/:id product
   */
  describe('/GET/:id product', () => {
    it('it should GET a product by the given id', (done) => {
      let product_info = {
        name: "Samsung Galaxy S10",
        description: "Best Phone",
        marked_price: 6000,
        selling_price: 5000,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      }
      const product = new Product(product_info);
      product.save((err, product) => {
        api.get('/product/' + product.id)
          .set({
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
          })
          .end((err, res) => {
            if (err) return done(err);
            res.status.should.be.equal(200);
            res.body.should.have.property('name');
            res.body.should.have.property('description');
            res.body.should.have.property('marked_price');
            res.body.should.have.property('selling_price');
            res.body.should.have.property('images');
            done();
          });
      });

    });
  });
  /*
   * Test the /PUT/:id route
   */
  describe('/PUT/:id product', () => {
    it('it should UPDATE a product given the id', (done) => {
      let product_info = {
        name: "Samsung Galaxy S10",
        description: "Smart Phone",
        marked_price: 7000,
        selling_price: 6000.5,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      }
      let updated_product_info = {
        name: "Samsung Galaxy S10+",
        description: "Best Phone",
        marked_price: 6000,
        selling_price: 5000,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }, {
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      }
      const product = new Product(product_info);
      product.save((err, product) => {
        api.put('/product/' + product.id)
          .set({
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
          })
          .send(updated_product_info)
          .end((err, res) => {
            if (err) return done(err);
            res.status.should.be.equal(200);
            res.body.should.have.property('name');
            res.body.should.have.property('description');
            res.body.should.have.property('marked_price');
            res.body.should.have.property('selling_price');
            res.body.should.have.property('images');
            done();
          });
      });
    });
  });
  /*
   * Test the /DELETE/:id route
   */
  describe('/DELETE/:id product', () => {
    it('it should DELETE a product given the id', (done) => {
      let product_info = {
        name: "Samsung Galaxy S10",
        description: "Best Phone",
        marked_price: 6000,
        selling_price: 5000,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      }
      const product = new Product(product_info);
      product.save((err, product) => {
        api.delete('/product/' + product.id)
          .set({
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
          })
          .end((err, res) => {
            if (err) return done(err);
            res.status.should.be.equal(200);
            res.body.should.have.property('message').eql('Successfully deleted');
            done();
          });
      });
    });
  });
});