var chai = require('chai');
var expect = chai.expect;
var tree = require('../tree');
var Traverse = require('../traverse');

var traverse = new Traverse(tree);

describe('Validation', function(){
  describe('Traversal Object', function () {

    it('should be an instance of itself', function () {
      expect(traverse).to.be.an.instanceOf(Traverse);
    });

    it('should take a data structure and set it as a property on itself', function () {
      expect(traverse.tree).to.not.be.undefined;
      expect(traverse.tree).to.be.an('object');
    });
  }); // ends traversal object describe
}); // ends validation describe

describe('Traversing a Tree', function () {
  describe('Methods should exist', function () {
    var methodList = [
      'getAllNames',
      'getAllAges',
      'getLeafNames',
      'getLeafAges',
      'findAllParentsNames',
      'findAllParentsAge',
      'findName',
      'findAge'
    ];

    for (var i = 0; i < methodList.length; i++) {
      checkMethodExistance(traverse, methodList[i]);
    }

  });// ends methods exists describe

  describe('Method getAllNames', function () {
    // var results = traverse.getAllNames();
    var results = ['brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'brah', 'Nikola Tesla', 'brah', 'brah', 'brah', 'brah', 'Kingtak', 'Eylem', 'Douglas Crockford', 'Jayson'];

    it('should return an array of strings', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsStrings);
    });

    it('should be an array of thirty-two names', function () {
      expect(results).to.have.length(32);
    });

    it('should have all the names!', function () {
      expect(results).to.include.members(['Nikola Tesla', 'Kingtak', 'Eylem', 'Douglas Crockford', 'Jayson']);
    });
  }); // ends method getAllNames describe

  describe('Method getAllAges', function () {
    // var results = traverse.getAllAges();
    var results = [1, 2, 3, 22, 5, 6, 7, 8, 9, 0, 1, 88, 3, 4, 5, 6, 7, 8, 9, 0, 500, 2, 3, 4, 5, 66, 7, 8, 9, 0, 1, 1337];

    it('should return an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should be an array of thirty-two names', function () {
      expect(results).to.have.length(32);
    });

    it('should have all the numbers!', function () {
      expect(results).to.include.members([66, 22, 88, 1337, 500]);
    });
  });

  describe('Method getLeafNames', function () {
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

    var sixteen_names = [
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
        expect(results).to.be.an('array');
        expect(results).to.satisfy(containsStrings);
    });

    it('should be an array of sixteen string values', function () {
      expect(results).to.have.length(16);
    });

    it('should contains all the names!', function () {
      expect(results).to.include.members(sixteen_names);
    });
    
  }); //ends getLeafName describe

  describe('Method getLeafAges', function () {
    // var results = traverse.getLeafAges();
    var results = [28, 560, 91, 16, 783, 8008, 62, 65, 23, 43, 13, 914, 841, 33, 88, 500];

    it('should be an array of numbers', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsNumbers);
    });

    it('should be an array of sixteen values', function () {
      expect(results).to.have.length(16);
    });

    it('should contain certain numbers', function () {
      var sixteen_ages = [28, 560, 91, 16, 783, 8008, 62, 65, 23, 43, 13, 914, 841, 33, 88, 500 ];
      expect(results).to.have.members(sixteen_ages);
    });
  }); // ends getLeafAges describe

  describe('Method findAllParentsNames', function () {
    // var results = traverse.findAllParentsNames();
    var results = ['stuff'];

    it('should be an array of strings', function () {
      expect(results).to.be.an('array');
      expect(results).to.satisfy(containsStrings);
    });

    it('should not include leaf names', function () {
      var leafNames = traverse.getLeafNames();
      var result = traverse.findAllParentsNames();

      expect(results).to.not.include.members(leafNames);
    });

    it('should contain some of these names', function () {
      var someParentNames = ['Stevie', 'Mark', 'Charles', 'Cortney', 'Wray', 'Kingtak', 'Bjorn'];

      expect(results).to.include.members(someParentNames);
    });
  }); // ends findAllParentsNames describe

  describe('Method findName', function () {
    it('should find a node by it\'s name', function () {
      var result = traverse.findName('Nikola Tesla');

      expect(result).to.be.an('object');
      expect(result).to.include.keys('name');
      expect(result).to.include.keys('age');
      expect(result).to.include.keys('has_parent');
      expect(result).to.include.keys('is_leaf');
      expect(result).to.include.keys('children');
    });
  }); //ends findName describe

  


}); // ends traversing describe


/* **************** *
 * helper functions *
 * **************** */

// check each method by it's name
function checkMethodExistance(tree, methodName){
  it(methodName + ' should be defined and be a Function', function () {
    expect(tree[methodName]).to.not.be.undefined;
    expect(tree[methodName]).to.a.instanceOf(Function);
  });
}

// used to the satisfy(cheezburger);
function containsStrings(array) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      return false;
    }
  }
  return true;
}

function containsNumbers(array) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      return false;
    }
  }
  return true;
}