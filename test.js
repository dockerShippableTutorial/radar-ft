var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;
var should = require('should');
var BASE_URL = process.env.API_URL;


var url = BASE_URL + '/info';

describe('Info page', function() {
  it('renders something', function(done) {
    superagent.get(url)
    .end(function(err, res) {
      (err === null).should.equal(true);
      res.statusCode.should.equal(200);
      done();
    });
  });
});

describe('Has time', function() {
  it('puts a valid time field', function(done) {
    superagent.get(url)
    .end(function(err, res) {
      (err === null).should.equal(true);
      res.statusCode.should.equal(200);
      res.body.time.should.exist();
      done();
    });
  });
});
