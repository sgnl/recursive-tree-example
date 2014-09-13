# Recursive Tree Traversal
Build a function that will traverse a tree and return an Array of collection of Strings. These Strings are the value of a leaf node's name property found within the tree. A leaf node is an object that has no children.

This tree is in `JSON` format.

**An example of a node inside of the tree:**

````
{
  name: String,     // have a String with a name value, e.g. "Russel"
  has_parent: null, // can be of True, False, or Null values.
  has_children: true, // Boolean, if True then the children property Array will be populated
  children: []    // An Array of Objects that look like this Object.
}
    
````

