
'use strict';
// var traverse = {};

function Traverse(data){
  this.tree = data;
};
/* 
 * build the methods via prototype
 * the first one is free
 * uncomment the code below, then remove this comment
 */

Traverse.prototype.getAllNames = function(currentNode, resultsArray){
  this.results = resultsArray || [];
  var _tree = this.tree;
  var node = (function(){
    if (!currentNode) {
      return _tree.root;
    } else {
      return currentNode;
    }
  })(_tree);

  // console.log(node.name);
  // this.results.push(node.name);
  this.pushValue(node, 'name');

  if (node.has_children) {
    for (var i = 0; i < node.children.length; i++) {
      this.getAllNames(node.children[i], this.results);
    }
  }

  return this.results;
};

Traverse.prototype.getAllAges = function(){};
Traverse.prototype.getLeafNames = function(){};
Traverse.prototype.getLeafAges = function(){};
Traverse.prototype.findAllParentsNames = function(){};
Traverse.prototype.findAllParentsAge = function(){};
Traverse.prototype.findName = function(){};
Traverse.prototype.findAge = function(){};

/******************
 * Helper Methods *
 ******************/

Traverse.prototype.pushValue = function(obj, val){
  this.results.push(obj[val]);
};

/* exports the Class Traverse */
module.exports = Traverse;