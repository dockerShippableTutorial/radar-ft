var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;
var should = require('should');
var BASE_URL = process.env.API_URL;


var url = BASE_URL + '/info';

describe('Info page', function() {
  it('no errors should be present and status code should be 200',
  function(done) {
    superagent.get(url)
    .end(function(err, res) {
      (err === null).should.equal(true);
      res.statusCode.should.equal(200);
      done();
    });
  });
});

describe('Info page', function() {
  describe('Time field', function() {
    it('no errors should be present, status code should be 200 ' +
    'and the JSON `time` field should exist', function(done) {
      superagent.get(url)
      .end(function(err, res) {
        (err === null).should.equal(true);
        res.statusCode.should.equal(200);
        should.exist(res.body.time);
        done();
      });
    });
  });
});
