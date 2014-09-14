
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
  var node = configNode(_tree, currentNode);

  this.pushValue(node, 'name');

  if (node.has_children) {
    followBranches.call(this, node.children);
  }

  return this.results;
};

Traverse.prototype.getAllAges = function(currentNode, resultsArray){
  this.results = resultsArray || [];
  var _tree = this.tree;
  var node = configNode(_tree, currentNode);

  this.pushValue(node, 'age');

  if (node.has_children) {
    followBranches.call(this, node.children);
  }

  return this.results;
};

Traverse.prototype.getLeafNames = function(){};
Traverse.prototype.getLeafAges = function(){};
Traverse.prototype.findAllParentsNames = function(){};
Traverse.prototype.findAllParentsAge = function(){};
Traverse.prototype.findName = function(){};
Traverse.prototype.findAge = function(){};

/******************
 * Helper Methods *
 ******************/

var configNode = function(_tree, currentNode){
  if (!currentNode) {
    return _tree.root;
  } else {
    return currentNode;
  }
};

function followBranches (branch) {
  for (var i = 0; i < branch.length; i++) {
    this.getAllNames(branch[i], this.results);
  }
}

Traverse.prototype.pushValue = function(obj, val){
  this.results.push(obj[val]);
};

/* exports the Class Traverse */
module.exports = Traverse;