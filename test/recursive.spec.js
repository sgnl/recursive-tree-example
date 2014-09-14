var chai = require('chai');
var expect = chai.expect;
var tree = require('../tree');
var Traverse = require('../traverse');

describe('Validation', function(){
  describe('Traversal Object', function () {
    var traverse = new Traverse(tree);

    it('should be an instance of itself', function () {
      expect(traverse).to.be.an.instanceOf(Traverse);
    });

    it('should take a data structure and set it as a property on itself', function () {
      expect(traverse.tree).to.not.be.undefined;
      expect(traverse.tree).to.be.a('object');
    });
  }); // ends traversal object describe
}); // ends validation describe

describe('Traversing a Tree', function(){
  describe('Methods should exist', function(){
    var traverse = new Traverse(tree);
    var methodList = [
      'getAllNames',
      'getAllAges',
      'getLeafNames',
      'getLeafAges',
      'findAllParentsName',
      'findAllParentsAge',
      'findName',
      'findAge'
    ];

    for (var i = 0; i < methodList.length; i++){
      checkMethodExistance(traverse, methodList[i]);
    }
  });// ends methods exists describe

  describe('The Method getAllNames', function(){
    var traverse = new Traverse(tree);
    // var results = traverse.getAllNames();
    var results = ['brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'Nikola Tesla', 'brah', 'brah', 'brah', 'brah', 'Kingtak', 'Eylem', 'Douglas Crockford', 'Jayson'];

    it('should return an array of strings', function(){
      expect(results).to.be.a('array');
      expect(results).to.satisfy(containsStrings);
    });
    it('should be an array of thirty-two names', function () {
      expect(results).to.have.length(32);
    });
    it('should have all the names!', function () {
      expect(results).to.include.members(['Nikola Tesla', 'Kingtak', 'Eylem', 'Douglas Crockford', 'Jayson']);
    });
  }); // ends method getAllNames describe

  describe('The Method getAllAges', function () {
    var traverse = new Traverse(tree);
    // var results = traverse.getAllAges();
    var results = [1, 2, 3, 22, 5, 6, 7, 8, 9, 0, 1, 88, 3, 4, 5, 6, 7, 8, 9, 0, 500, 2, 3, 4, 5, 66, 7, 8, 9, 0, 1, 1337];

    it('should return an array of numbers', function(){
      expect(results).to.be.a('array');
      expect(results).to.satisfy(containsNumbers);
    });
    it('should be an array of thirty-two names', function () {
      expect(results).to.have.length(32);
    });
    it('should have all the numbers!', function () {
      expect(results).to.include.members([66, 22, 88, 1337, 500]);
    });
  });

  describe('The Method getLeafNames', function () {
    var traverse = new Traverse(tree);
    // var results = traverse.getLeafNames();
    var results = [
      'Spencer Toyama',
      'Edgar Allan Poe',
      'Albert Einstein',
      'Nikola Tesla',
      'Garfield The Cat',
      'Milton S. Hershey',
      'Gene Shoemaker',
      'Neil deGrasse Tyson',
      'Carl Sagan',
      'Marty McFly',
      'Bill Nye',
      'Ann Druyan',
      'Jon Stewart',
      'Aaron Turner',
      'Douglas Crockford',
      'Victor Von Doom'
    ];

    it('should return an array of strings', function () {
        expect(results).to.be.a('array');
        expect(results).to.satisfy(containsStrings);
    });
    it('should be an array of sixteen names', function () {
      expect(results).to.have.length(16);
    });
    it('should contains all the names!', function () {
      expect(results)
    });
    
  }); //ends getLeafName describe


}); // ends traversing describe


/* **************** *
 * helper functions *
 * **************** */

// check each method by it's name
function checkMethodExistance(tree, methodName){
  it(methodName + ' should be defined and be a Function', function(){
    expect(tree[methodName]).to.not.be.undefined;
    expect(tree[methodName]).to.a.instanceOf(Function);
  });
}

// used to the satisfy(cheezburger);
function containsStrings(array){
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++){
    if (typeof array[i] !== 'string') {
      return false;
    }
  }
  return true;
}

function containsNumbers(array){
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++){
    if (typeof array[i] !== 'number') {
      return false;
    }
  }
  return true;
}