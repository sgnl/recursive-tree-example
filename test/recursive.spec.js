var chai = require('chai');
var expect = chai.expect;
var tree = require('../tree');
var traverse = require('../traverse');

describe('Traversing a Tree', function(){
  describe('Methods should exist', function(){
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
      checkMethodExistance(methodList[i]);
    }
  });// ends Methods exists... desc

  describe('Method getAllNames', function(){
    beforeEach(function(){
      var 
    });

      it('should return an array', function(){
        
      });
  });
}); // ends Traversing... desc


/* **************** *
 * helper functions *
 * **************** */
function checkMethodExistance(methodName){
  it(methodName + ' should be defined and be a Function', function(){
    expect(traverse[methodName]).to.not.be.undefined;
    expect(traverse[methodName]).to.a.instanceOf(Function);
  });
}