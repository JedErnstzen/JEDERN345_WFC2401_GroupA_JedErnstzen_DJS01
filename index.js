/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const INITIAL_SPEED_KMPH = 10000; // Initial speed (km/h)
const ACCELERATION_MPS2 = 3; // Acceleration (m/s^2)
const TIME_HOURS = 1; // Time (hours)
const INITIAL_DISTANCE_KM = 0; // Initial distance (km)
const INITIAL_FUEL_KG = 5000; // Initial fuel (kg)
const FUEL_CONSUMPTION_RATE_KGPS = 0.5; // Fuel consumption rate (kg/s)

// Function to calculate new speed (km/h) based on acceleration and time
function calculateNewSpeed(initialSpeed, acceleration, timeHours) {
  // Convert speed from km/h to m/s
  const initialSpeedMPS = initialSpeed / 3.6;

  // Calculate new speed in m/s
  const newSpeedMPS = initialSpeedMPS + (acceleration * timeHours * 3600);

  // Convert new speed from m/s to km/h
  const newSpeedKMPH = newSpeedMPS * 3.6;

  return newSpeedKMPH;
}

// Function to calculate new distance (km) based on initial distance, speed, and time
function calculateNewDistance(initialDistance, speed, timeHours) {
  const newDistance = initialDistance + (speed * timeHours);
  return newDistance;
}

// Function to calculate remaining fuel (kg) based on initial fuel, fuel consumption rate, and time
function calculateRemainingFuel(initialFuel, fuelConsumptionRate, timeHours) {
  const fuelConsumed = fuelConsumptionRate * timeHours * 3600;
  const remainingFuel = initialFuel - fuelConsumed;
  return remainingFuel;
}

// Add a try-catch block to catch any errors
try {
  // Calculate new speed
  const NEW_SPEED_KMPH = calculateNewSpeed(INITIAL_SPEED_KMPH, ACCELERATION_MPS2, TIME_HOURS);

  // Calculate new distance
  const NEW_DISTANCE_KM = calculateNewDistance(INITIAL_DISTANCE_KM, INITIAL_SPEED_KMPH, TIME_HOURS);

  // Calculate remaining fuel
  const REMAINING_FUEL_KG = calculateRemainingFuel(INITIAL_FUEL_KG, FUEL_CONSUMPTION_RATE_KGPS, TIME_HOURS);

  console.log(`Corrected New Speed: Approximately ${NEW_SPEED_KMPH.toFixed(0)} km/h`);
  console.log(`Corrected New Distance: Approximately ${NEW_DISTANCE_KM.toFixed(0)} km`);
  console.log(`Corrected Remaining Fuel: Approximately ${REMAINING_FUEL_KG.toFixed(0)} kg`);
} catch (error) {
  console.error('An error occurred:', error.message);
}