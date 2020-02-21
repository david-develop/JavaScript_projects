// The describe() function takes an object as a parameter. It accesses that object’s properties to create a description string. Below is an alternative approach, using a describe() property inside the object.

const aurora = {
  name: 'Aurora',
  health: 150,
  strength: 25,

  // Return the character description
  describe () {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength`;
  }
};

console.log(aurora.describe());
