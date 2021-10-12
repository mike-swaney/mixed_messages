// Set up a random number generator to pick a random element in an array (num)
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num)
  }

// Create arrays for three sets of data. Arrays work well to randomly access elements using the above funtion.
const randomlySelected = {
  sport: ['swim', 'ride', 'run'],
  trainingSession: ['aerobic', 'tempo', 'V02 max'],
  duration: ['30 min', '60 min', '90 min']
}
  

 