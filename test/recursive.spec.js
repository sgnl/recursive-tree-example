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
  });
});

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
  });// ends Methods exists... desc

  // describe('Method getAllNames', function(){
  //   beforeEach(function(){
  //     var result = traverse(tree).getAllNames();
  //   });

  //     it('should return an array', function(){
        
  //     });
  // });
}); // ends Traversing... desc


/* **************** *
 * helper functions *
 * **************** */
function checkMethodExistance(tree, methodName){
  it(methodName + ' should be defined and be a Function', function(){
    expect(tree[methodName]).to.not.be.undefined;
    expect(tree[methodName]).to.a.instanceOf(Function);
  });
}