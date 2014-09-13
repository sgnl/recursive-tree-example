

'use strict';
// a tree to be climbed.
module.export = {
  root: {
    name: "Bjorn",
    has_parent: null,
    has_children: true,
    children: [
      {
        name: "Manny",
        has_parent: true,
        is_leaf: false,
        has_children: true,
        children: [
          {
            {
              name: "Spencer",
              has_parent: false,
              is_leaf: true,
              has_children: false,
              children: []
            },
            {
              name: "Shannon",
              has_parent: true,
              is_leaf: false,
              has_children: true,
              children: [
                {
                  name: "Kingtak",
                  has_parent: true,
                  is_leaf: false,
                  has_children: true,
                  children: [
                    {
                      name: "Wray",
                      has_parent: true,
                      is_leaf: false,
                      has_children: true,
                      children: [
                        {
                          name: "Edgar Allan Poe",
                          has_parent: true,
                          is_leaf: true,
                          has_children: false,
                          children: []
                        },
                        {
                          name: "Albert Einstein",
                          has_parent: true,
                          is_leaf: true,
                          has_children: false,
                          children: []
                        },
                      ]
                    },
                    {
                      name: "Nikola Tesla",
                      has_parent: true,
                      is_leaf: true,
                      has_children: false,
                      children: []
                    }
                  ]
                },
                {
                  name: "Peter",
                  has_parent: true,
                  is_leaf: false,
                  has_children: true,
                  children: [
                    {
                      name: "Garfield The Cat",
                      has_parent: true,
                      is_leaf: true,
                      has_children: false,
                      children: []
                    },
                    {
                      name: "Dexter",
                      has_parent: true,
                      is_leaf: false,
                      has_children: true,
                      children: [
                        {
                          name: "Brian",
                          has_parent: true,
                          is_leaf: false,
                          has_children: true,
                          children: [
                            {
                              name: "Eylem",
                              has_parent: true,
                              is_leaf: false,
                              has_children: true,
                              children: [
                                {
                                  name: "Milton S. Hershey",
                                  has_parent: true,
                                  is_leaf: true,
                                  has_children: false,
                                  children: []
                                }
                              ]
                            },
                            {
                              name: "Albert",
                              has_parent: true,
                              is_leaf: false,
                              has_children: true,
                              children: [
                                {
                                  name: "Charles",
                                  has_parent: true,
                                  is_leaf: false,
                                  has_children: true,
                                  children: [
                                    {
                                      name: "Gene Shoemaker",
                                      has_parent: true,
                                      is_leaf: true,
                                      has_children: false,
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  name: "Neil deGrasse Tyson",
                                  has_parent: true,
                                  is_leaf: true,
                                  has_children: false,
                                  children: []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: "Carl Sagan",
                          has_parent: true,
                          is_leaf: true,
                          has_children: false,
                          children: []
                        }
                      ]
                    },
                    {
                      name: "Mark",
                      has_parent: true,
                      is_leaf: false,
                      has_children: true,
                      children: [
                        {
                          name: "Marty McFly",
                          has_parent: true,
                          is_leaf: true,
                          has_children: false,
                          children: []
                        },
                        {
                          name: "Jayson",
                          has_parent: true,
                          is_leaf: false,
                          has_children: true,
                          children: [
                            {
                              name: "Bill Nye",
                              has_parent: true,
                              is_leaf: true,
                              has_children: false,
                              children: []
                            },
                            {
                              name: "Ann Druyan",
                              has_parent: true,
                              is_leaf: true,
                              has_children: false,
                              children: []
                            },
                            {
                              name: "Jon Stewart",
                              has_parent: true,
                              is_leaf: true,
                              has_children: false,
                              children: []
                            }
                          ]
                        },
                        {
                          name: "Aaron Turner",
                          has_parent: true,
                          is_leaf: true,
                          has_children: false,
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Mary",
              has_parent: true,
              is_leaf: false,
              has_children: true,
              children: [
                {
                  name: "Stevie",
                  has_parent: true,
                  is_leaf: false,
                  has_children: true,
                  children: [
                    {
                      name: "Michelle",
                      has_parent: true,
                      is_leaf: false,
                      has_children: true,
                      children: [
                        {
                          name: "Douglas Crockford",
                          has_parent: true,
                          is_leaf: true,
                          has_children: false,
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
        ]
      },
      {
        name: "The Penguin",
        has_parent:true,
        is_leaf: true,
        has_children: false,
        children: []
      }
    ]
  }
}
// Still beneath the snow,
// The bonsai'd elm makes spring plans:
// "Leaves, I think, this year."