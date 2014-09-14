
'use strict';
// var traverse = {};

function Traverse(data){
  this.tree = data;
};

Traverse.prototype.getAllNames = function(){};
Traverse.prototype.getAllAges = function(){};
Traverse.prototype.getLeafNames = function(){};
Traverse.prototype.getLeafAges = function(){};
Traverse.prototype.findAllParentsNames = function(){};
Traverse.prototype.findAllParentsAge = function(){};
Traverse.prototype.findName = function(){};
Traverse.prototype.findAge = function(){};



module.exports = Traverse;