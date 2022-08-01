'use strict';

const express = require('express');
const morgan = require('morgan');

const {getItems,getItemById}=require('./handler_items')
const {getCategories,getCategory} = require('./handler_category')
const {getCart, postCart,deleteCart} = require('./handler_cart')
const {getCompanies,getCompanyById, getProductsByCompany} = require('./handler_company')
const {getOrderHistory,postOrderHistory} = require('./handler_history')

const PORT = 4000;

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // REST endpoints?
  .get('/bacon', (req, res) => res.status(200).json('🥓'))

  .get('/api/items',getItems)
  .get('/api/shop/items/:itemId',getItemById)
  .get('/api/items/categories',getCategories)
  .get('/api/items/categories/:category',getCategory)

  .get('/api/cart',getCart)
  .post('/api/cart',postCart)
  .delete('/api/cart/:itemId',deleteCart)

  .get('/api/orderHistory',getOrderHistory)
  .post('/api/orderHistory',postOrderHistory)

  .get('/api/companies',getCompanies)
  .get('/api/companies/:companyId',getCompanyById)
  .get('/api/company/products/:companyId',getProductsByCompany)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
