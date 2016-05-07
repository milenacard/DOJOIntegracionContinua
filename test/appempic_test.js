'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

	/*it('El nombre debe ser awesome', function () {
    appempic().should.equal('awesome'); //corresponde al asserEquals
  }); */

  it('El nombre debe ser Milena', function () {
    appempic.getName().should.equal('Milena'); 
  });

   it('El apellido debe ser Card', function () {
    appempic.getLastName().should.equal('Card'); 
  });

});
