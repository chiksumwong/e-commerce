const server = require("../app");
const Product = require('./../models/product.model')

const chai = require('chai');
const chaiHttp = require('chai-http');

let expect = chai.expect;
let should = chai.should();

chai.use(chaiHttp);

describe('Product', () => {

  beforeEach((done) => { //Before each test we empty the database
      Product.remove({}, (err) => { 
        done();           
      });        
  });


  /*
   * Test the /GET route
   */
  describe('/GET product', () => {
    it('it should GET all the product', (done) => {
      chai.request(server)
        .get('http://localhost:3000/api/v1/products')
        .set({
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
        })
        .end((err, res) => {
          // res.should.have.status(200);
          // res.body.should.be.a('array');
          // res.body.length.should.be.eql(0);
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
        name: "product19",
        description: "product is good",
        marked_price: 150.5,
        selling_price: 100.5,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      }
      chai.request(server)
        .post('http://localhost:3000/api/v1/product')
        .set({
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FiMWQ4ZTk1YWU3ZTQ1YTBhZjc5NTciLCJpYXQiOjE1NTQ3MjQ1MDF9.PbTEg84myv-3G2VtB1gXpGqcZjKACg-I0AUMKFKMVlI'
        })
        .send(product)
        .end((err, res) => {
          // res.status.should.be.equal(200);
          // res.body.should.be.a('object');
          // res.body.should.have.property('message').eql('Book successfully added!');
          // res.body.book.should.have.property('title');
          // res.body.book.should.have.property('author');
          // res.body.book.should.have.property('pages');
          // res.body.book.should.have.property('year');
          done();
        });
    });

  });
  /*
   * Test the /GET/:id route
   */
  describe('/GET/:id product', () => {
    it('it should GET a product by the given id', (done) => {
      let product = new Product({
        name: "product19",
        description: "product is good",
        marked_price: 150.5,
        selling_price: 100.5,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      });
      product.save((err, product) => {
        chai.request(server)
          .get('http://localhost:3000/api/v1/product/' + product.id)
          .end((err, res) => {
            // res.should.have.status(200);
            // res.body.should.have.property('title');
            // res.body.should.have.property('author');
            // res.body.should.have.property('pages');
            // res.body.should.have.property('year');
            // res.body.should.have.property('_id').eql(book.id);
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
      let product = new Product({
        name: "product19",
        description: "product is good",
        marked_price: 150.5,
        selling_price: 100.5,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      });
      let updated_product = new Product({
        name: "product19",
        description: "product is bad",
        marked_price: 155.5,
        selling_price: 106.5,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      });
      product.save((err, product) => {
        chai.request(server)
          .put('http://localhost:3000/api/v1/product/' + product.id)
          .send(updated_product)
          .end((err, res) => {
            // res.should.have.status(200);
            // res.body.should.be.a('object');
            // res.body.should.have.property('message').eql('Book updated!');
            // res.body.book.should.have.property('year').eql(1950);
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
      let product = new Product({
        name: "product19",
        description: "product is good",
        marked_price: 150.5,
        selling_price: 100.5,
        image: [{
          "path": "https://images.samsung.com/hk/smartphones/galaxy-s10/images/galaxy-s10-share-image.jpg"
        }]
      });
      product.save((err, product) => {
        chai.request(server)
          .delete('http://localhost:3000/api/v1/product/' + product.id)
          .end((err, res) => {
            // res.should.have.status(200);
            // res.body.should.be.a('object');
            // res.body.should.have.property('message').eql('Book successfully deleted!');
            // res.body.result.should.have.property('ok').eql(1);
            // res.body.result.should.have.property('n').eql(1);
            done();
          });
      });
    });
  });
});