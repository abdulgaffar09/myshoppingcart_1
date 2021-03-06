var express = require('express');
var path = require('path');
var users = require('./users');
var products = require('./productRoute');


var appRoute = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render(path.join(__dirname , '../../client/index'));
    console.log("rendered")

  });

  router.get('/api/users/*', users);
  router.post('/api/users/*', users);
  router.delete('/api/users/*', users);
  router.put('/api/users/*', users);
  /*router.get('/users/login/', users);
  router.delete('/users/logout', users);
  router.post('/users/forgotPassword', users);
  router.put('/users/resetpassword', users);
  router.get('/users/getUser', users);
  router.get('/api/users/user/getProfile', users);
  router.get('/api/users/user/getAddress', users);
  router.post('/api/users/user/saveAddress', users);
  router.put('/api/users/user/saveProfile', users);
  router.delete('/api/users/user/deleteAddress', users);

  router.get('/users/register/checkemail', users);
  router.post('/users/register/createUser', users);
  router.post('/users/register/confirmregistration', users);*/
  router.get('/api/products/*', products);
  router.post('/api/products/*', products);
  router.delete('/api/products/*', products);
  router.put('/api/products/*', products);
 /* router.get('/api/products/search', products);
  router.get('/api/products/category', products);
  router.get('/api/products/brands', products);
  router.get('/api/products/offers', products);
  router.get('/api/products/viewproduct', products);
  router.get('/api/products/viewproduct/similarProducts', products);*/


};
module.exports = appRoute;
