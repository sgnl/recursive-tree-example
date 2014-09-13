# Recursive Tree Traversal
Build a Class with methods that can traverse a tree. Each method should return a different collections of data from the data tree.

###Methods:
1. `getAllNames` returns an Array with all of the values of the Name property for each and every node.
2. `getAllAges` returns an Array with all of the values of the Age property for each and every node.
3. `getLeafNames` returns an Array with only the values of the Name property from nodes that are leafs. *A leaf node is an object with no children nodes.*
4. `getLeafAges` returns an Array with only the values of the Age property from nodes that are leafs.
5. `findName(String)` finds a node by it's name property and returns that entire object.
6. `findAge(Number)` finds a node by it;s age property and returns that entire object.

This tree is in `JSON` format.

**An example of a node inside of the tree:**

````
{
  name: "Roger Moore",  // have a String with a name value, e.g. "Russel"
  has_parent: null,   // can be of True, False, or Null values.
  has_children: true, // Boolean, if True then the children property Array will be populated
  children: [     // An Array of Objects that look contain more nodes.
    {         // Nodes are objects that look similar to this object.
      name: "Sean Connery",
      has_parent: true,
      has_children: false,
      children: []
    }
  ]
}
    
````

