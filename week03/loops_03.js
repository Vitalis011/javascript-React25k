/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = () => {
  let distance;
  let time;
  let speed;
  while (distance !== 0) {
    distance = Number(window.prompt("Enter a distance in kilometers: "));
    if (distance === 0) {
      break;
    }
    time = window.prompt("Enter a time in hours: ");
    speed = distance / time;
    console.log("The distance is ", speed);
  }
};
calculateAverageSpeed();
