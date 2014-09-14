
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
  var node = initNode(_tree, currentNode);

  this.pushValue(node, 'name');

  if (node.has_children) {
    followBranches.call(this, node.children, this.getAllNames);
  }

  return this.results;
};

Traverse.prototype.getAllAges = function(currentNode, resultsArray){
  this.results = resultsArray || [];
  var _tree = this.tree;
  var node = initNode(_tree, currentNode);

  this.pushValue(node, 'age');

  if (node.has_children) {
    followBranches.call(this, node.children, this.getAllAges);
  }

  return this.results;
};

Traverse.prototype.getLeafNames = function(currentNode, resultsArray){
  this.results = resultsArray || [];
  var _tree = this.tree;
  var node = initNode(_tree, currentNode);

  // console.log(node.is_leaf);
  if (node.is_leaf) {
    this.pushValue(node, 'name'); 
  }

  if (node.has_children) {
    followBranches.call(this, node.children, this.getLeafNames);
  }

  return this.results;

};

Traverse.prototype.getLeafAges = function(currentNode, resultsArray){
  this.results = resultsArray || [];
  var _tree = this.tree;
  var node = initNode(_tree, currentNode);

  // console.log(node.is_leaf);
  if (node.is_leaf) {
    this.pushValue(node, 'age'); 
  }

  if (node.has_children) {
    followBranches.call(this, node.children, this.getLeafAges);
  }

  return this.results;
};

Traverse.prototype.findAllParentsNames = function(currentNode, resultsArray){
  this.results = resultsArray || [];
  var _tree = this.tree;
  var node = initNode(_tree, currentNode);

  if (!node.is_leaf) {
    this.pushValue(node, 'name'); 
  }

  if (node.has_children) {
    followBranches.call(this, node.children, this.findAllParentsNames);
  }

  return this.results;


};
Traverse.prototype.findAllParentsAge = function(){};
Traverse.prototype.findName = function(){};
Traverse.prototype.findAge = function(){};

/******************
 * Helper Methods *
 ******************/

var initNode = function(_tree, currentNode){
  if (!currentNode) {
    return _tree.root;
  } else {
    return currentNode;
  }
};

function followBranches (branch, cb) {
  for (var i = 0; i < branch.length; i++) {
    cb.call(this, branch[i], this.results);
  }
}

Traverse.prototype.pushValue = function(obj, val){
  this.results.push(obj[val]);
};

/* exports the Class Traverse */
module.exports = Traverse;