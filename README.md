# e-commerce-platform-backend
[![Build Status](https://travis-ci.com/chiksumwong/e-commerce-backend.svg?token=zvXMXvZ8HnB2PtvDsBvS&branch=master)](https://travis-ci.com/chiksumwong/e-commerce-backend)

```sh
$ npm install
$ npm test
$ npm start
```
## APIs Design

### Account APIs
| APIs              | Method | Urls                                       |
| ----------------- | ------ | ------------------------------------------ |
| Register          | POST   | http://localhost:3000/api/v1/register      |
| Login             | POST   | http://localhost:3000/api/v1/login         |
| Get User By ID    | GET    | http://localhost:3000/api/v1/user/:user_id |
| Update User By ID | PUT    | http://localhost:3000/api/v1/user/:user_id |

### Product APIs
| APIs              | Method | Urls                                             |
| ----------------- | ------ | ------------------------------------------------ |
| Create Product    | POST   | http://localhost:3000/api/v1/product             |
| Get All Products  | GET    | http://localhost:3000/api/v1/products            |
| Get Product By ID | GET    | http://localhost:3000/api/v1/product/:product_id |
| Update Product    | PUT    | http://localhost:3000/api/v1/product/:product_id |
| Delete Product    | DELETE | http://localhost:3000/api/v1/product/:product_id |

### Shopping Cart APIs
| APIs                            | Method | Urls                                          |
| ------------------------------- | ------ | --------------------------------------------- |
| Add Product to Shopping Cart    | POST   | http://localhost:3000/api/v1/cart             |
| Update Product in Shopping Cart | PUT    | http://localhost:3000/api/v1/cart/:product_id |
| Delete Product in Shopping Cart | DELETE | http://localhost:3000/api/v1/cart/:product_id |

### Order APIs
| APIs                                          | Method | Urls                                         |
| --------------------------------------------- | ------ | -------------------------------------------- |
| Payment                                       | POST   | http://localhost:3000/api/v1/payment         |
| View Shopping History / Order List with state | GET    | http://localhost:3000/api/v1/order/:user_id  |
| Update Order State                            | PUT    | http://localhost:3000/api/v1/order/:order_id |

## Database Design
<p>
<kbd>
<img src='public/img/database_design.png' alt='database_design'>
</kbd>
</p>