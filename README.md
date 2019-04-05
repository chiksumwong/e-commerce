# e-commerce-backend
https://travis-ci.com/chiksumwong/e-commerce-backend.svg?branch=master

```sh
$ npm install
$ npm start
$ npm test
```

### Account APIs
| APIs         | Method | Urls                                      |
| ------------ | ------ | ----------------------------------------- |
| Registration | POST   | http://localhost:3000/api/v1/registration |
| Login        | POST   | http://localhost:3000/api/v1/login        |
| Logout       | POST   | http://localhost:3000/api/v1/logout       |

### Product APIs
| APIs             | Method | Urls                                               |
| ---------------- | ------ | -------------------------------------------------- |
| Get All Products | GET    | http://localhost:3000/api/v1/products              |
| Search Product   | GET    | http://localhost:3000/api/v1/product/:product_name |
| Create Product   | POST   | http://localhost:3000/api/v1/product               |
| Update Product   | PUT    | http://localhost:3000/api/v1/product/:product_id   |
| Delete Product   | DELETE | http://localhost:3000/api/v1/product/:product_id   |

### Shopping APIs
| APIs                                          | Method | Urls                                         |
| --------------------------------------------- | ------ | -------------------------------------------- |
| Get All Products in Shopping Cart             | GET    | http://localhost:3000/api/v1/cart/user_id    |
| Add Product to Shopping Cart                  | POST   | http://localhost:3000/api/v1/cart            |
| Update Product in Shopping Cart               | PUT    | http://localhost:3000/api/v1/cart/:cart_id   |
| Delete Product in Shopping Cart               | DELETE | http://localhost:3000/api/v1/cart/:cart_id   |
| Payment                                       | POST   | http://localhost:3000/api/v1/payment         |
| View Shopping History / Order List with state | GET    | http://localhost:3000/api/v1/order/:user_id  |
| Update Order State                            | PUT    | http://localhost:3000/api/v1/order/:order_id |