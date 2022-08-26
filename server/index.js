'use strict';

// imports from package.json
const express = require('express');
const morgan = require('morgan');

// imports here
const {getItems,getItemById,patchStock}=require('./handler_items')
const {getCategories,getCategory} = require('./handler_category')
const {getCart, postCart,deleteCart} = require('./handler_cart')
const {getCompanies,getCompanyById,} = require('./handler_company')
const {getOrderHistory,postOrderHistory} = require('./handler_history')
const PORT = 4000; // port to run the server on

// create the server
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

  // GET method to get all items, itembyId, getcategory
  .get('/api/items',getItems)
  .get('/api/shop/items/:itemId',getItemById)
  .get('/api/items/categories',getCategories)
  .get('/api/items/categories/:category',getCategory)

  // PATCH method to update item's numInStock
  .patch('/api/shop/items/:itemId',patchStock)

  // GET method to get all items in cart
  .get('/api/cart',getCart)
  .post('/api/cart',postCart)
  // DELETE method to delete item from cart
  .delete('/api/cart/:itemId',deleteCart)

  // GET method to get order history
  .get('/api/orderHistory',getOrderHistory)
  .post('/api/orderHistory',postOrderHistory)

  // GET method to get all companies and companybyId
  .get('/api/companies',getCompanies)
  .get('/api/companies/:companyId',getCompanyById)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
