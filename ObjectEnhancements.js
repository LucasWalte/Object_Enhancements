/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
    return {
      firstName,
      lastName
    }
  }
  
  /* Write an ES2015 Version */
  const favoriteNumber = 7;
  
  const instructor = {
    firstName: "Lucas",
    [favoriteNumber]: "That is my favorite!"
  };
  
  /* Write an ES2015 Version */
  const instructor2 = {
    firstName: "Lucas",
    sayHi() {
      return "Salutations!";
    },
    sayBye() {
      return `${this.firstName} Farwell!`;
    }
  };
  
  function createAnimal(species, verb, noise) {
    return {
      species,
      [verb]() {
        return noise;
      }
    }
  }