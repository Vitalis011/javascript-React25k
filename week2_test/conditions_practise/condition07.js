/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/

const getAnimalDescription = (favoriteAnimal) => {
  switch (favoriteAnimal) {
    case "fox":
      return "Foxes are sly and smart!";
    case "dog":
      return "Dogs are loyal friends.";
    case "cat":
      return "Cats are curious and independent.";
    default:
      return "All animals are awesome!";
  }
};

console.log(getAnimalDescription("fox"));
console.log(getAnimalDescription("dog"));
console.log(getAnimalDescription("cat"));
console.log(getAnimalDescription("elephant"));
