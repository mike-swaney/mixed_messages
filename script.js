// Set up a random number generator to pick a random element in an array (num)
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num)
  }

// Create arrays for three sets of data. Arrays work well to randomly access elements using the above funtion.
const randomTriSession = {
  sport: ['swim', 'ride', 'run'],
  trainingSession: ['aerobic', 'tempo', 'V02 max'],
  duration: ['30 min', '60 min', '90 min']
}

// Create an array that the random variables can be pushed to.
let personalWorkout = []

// Create a for loop that iterates over randomTriSession.
for (let thing in randomTriSession) {
  let optionId = generateRandomNumber(randomTriSession[thing].length)
  switch (thing) {
    case 'sport':
      personalWorkout.push(`Today you will ${randomTriSession[thing][optionId]} `);
      break;
    case 'trainingSession':
      personalWorkout.push(`at ${randomTriSession[thing][optionId]} pace `);
      break;
    case 'duration':
      personalWorkout.push(`for a duration of ${randomTriSession[thing][optionId]}.`);
      break;
    default:
      personalWorkout.push('There is not enough info here');
      break; 
  }
}
function formatWorkout(session) {
  const formatted = personalWorkout.join('');
  console.log(formatted)
}

formatWorkout(personalWorkout);
 